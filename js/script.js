{
  'use strict';

  const titleClickHandler = function(event){
    console.log('Link was clicked!');
    console.log(event);
    event.preventDefault();

    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */
    const clickedElement = this;
    console.log('clickedElement:', clickedElement);
    this.classList.add('active');

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts article.active');

    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    console.log(articleSelector);

    /*.[DONE] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);

    /* [DONE] add class 'active' to the correct article */

    targetArticle.classList.add('active');
  };

  const optArticleSelector = '.post',
    optTitleListSelector = '.titles',
    optTitleSelector = '.post-title',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post-author';

  function generateTitleLinks(customSelector = ''){

    /*.[DONE] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /*.[DONE] find all the articles and save them to variable: articles */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    console.log(customSelector);
    console.log(optArticleSelector + customSelector);

    let html = '';

    /* [DONE] for each article */
    for(let article of articles){
      /* [DONE] get the article id */
      const articleId = article.getAttribute('id');
      console.log(articleId);

      /* [DONE] find the title element */
      /* get the title from the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      /* [DONE] create HTML of the link */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log(linkHTML);

      /* [DONE] insert link into titleList */
      html = html + linkHTML;
    }

    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');
    console.log(links);

    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }
  }

  generateTitleLinks();

  function generateTags(){

    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);

    /* START LOOP: for every article: */
    for(let article of articles){

      /* find tags wrapper */
      const wrTags = article.querySelector(optArticleTagsSelector);

      /* make html variable with empty string */
      let html = '';

      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');
      console.log(articleTags);

      /* split tags into array */
      const articleTagsArray = articleTags.split(' ');

      /* START LOOP: for each tag */
      for(let tag of articleTagsArray){
        console.log(tag);
        /* generate HTML of the link */
        const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
        console.log(linkHTML);

        /* add generated code to html variable */
        html = html + linkHTML + ' ';
      /* END LOOP: for each tag */
      }

      /* insert HTML of all the links into the tags wrapper */
      wrTags.innerHTML = html;

      /* END LOOP: for every article: */
    }
  }

  generateTags();

  function tagClickHandler(event){

    /*[DONE] prevent default action for this event */
    event.preventDefault();

    /* [DONE] make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;

    /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */
    const href = this.getAttribute('href');

    /* [DONE] make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
    console.log(tag);

    /* [DONE] find all tag links with class active */
    const allTagsLinksActive = document.querySelectorAll('a.active[href^="#tag-"]');

    /*[DONE] START LOOP: for each active tag link */
    for(let activeTagLink of allTagsLinksActive){

      /* [DONE] remove class active */
      activeTagLink.classList.remove('active');

    /* END LOOP: for each active tag link */
    }
    /* [DONE] find all tag links with "href" attribute equal to the "href" constant */
    const allTagsLinksHref = document.querySelectorAll('a[href="' + href + '"]');

    /* [DONE] START LOOP: for each found tag link */
    for(let tagLinkHref of allTagsLinksHref){

      /* [DONE] add class active */
      tagLinkHref.classList.add('active');

    /* END LOOP: for each found tag link */
    }

    /* [DONE] execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
  }

  function addClickListenersToTags(){
    /* find all links to tags */
    const allTagsLinks = document.querySelectorAll('a[href^="#tag-"]');

    /* START LOOP: for each link */
    for(let tagLink of allTagsLinks){

      /* add tagClickHandler as event listener for that link */
      tagLink.addEventListener('click', tagClickHandler);

    /* END LOOP: for each link */
    }
  }
  addClickListenersToTags();

  function generateAuthors(){

    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);

    /* START LOOP: for every article: */
    for(let article of articles){ 

      /* find authors */
      const allAuthors = article.querySelectorAll(optArticleAuthorSelector);
      console.log(allAuthors);

      /* make html variable with empty string */
      let html = '';

      /* START LOOP: for each author */
      for(let author of allAuthors){

        const authorLink = article.querySelector(optArticleAuthorSelector).innerHTML;
        console.log(authorLink);

        /* generate HTML of the link */
        const linkHTML = '<p><a href="#tag-' + authorLink + '"><span>' + authorLink + '</span></a></p>';
        console.log(linkHTML);

       /* add generated code to html variable */
        html = html + linkHTML;

      /* END LOOP: for each author */
      }
    /* insert HTML of all the links into the allAuthors*/
    allAuthors.innerHTML = html;
    }
  }

  generateAuthors();

  function addClickListenersToAuthors(){

    /* find all links to authors */
    const allAuthorLinks = document.querySelectorAll('a[href^="#tag-"]');

    /* START LOOP: for each author */
    for(let authorLink of allAuthorLinks){

      /* add authorClickHandler as event listener for that author */
      authorLink.addEventListener('click', authorClickHandler);

    /* END LOOP: for each link */
    }
  }
  addClickListenersToAuthors();

}