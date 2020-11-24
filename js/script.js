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
    optArticleTagsSelector = '.post-tags .list';

  function generateTitleLinks(){

    /*.[DONE] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /*.[DONE] find all the articles and save them to variable: articles */
    const articles = document.querySelectorAll(optArticleSelector);

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
        html = html + linkHTML;
      /* END LOOP: for each tag */
      }

      /* insert HTML of all the links into the tags wrapper */
      wrTags.innerHTML = html;

      /* END LOOP: for every article: */
    }
  }

  generateTags();

  function tagClickHandler(event){

    /* prevent default action for this event */
    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;

    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');

    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
    console.log(tag);

    /* find all tag links with class active */
    const allTagsLinks = document.querySelectorAll('a.active[href^="#tag-"]');

    /* START LOOP: for each active tag link */
    for(let tagsLinks of allTagsLinks){

      /* remove class active */
      tagsLinks.classList.remove('active');

    /* END LOOP: for each active tag link */
    }
    /* find all tag links with "href" attribute equal to the "href" constant */
    const allTagsLinksH = document.querySelectorAll('a[href="' + href + '"]');

    /* START LOOP: for each found tag link */
    for(let tagsLinksH of allTagsLinksH){

      /* add class active */
      tagsLinksH.classList.add('active');

    /* END LOOP: for each found tag link */
    }

    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
  }

  function addClickListenersToTags(){
    /* find all links to tags */

    /* START LOOP: for each link */

    /* add tagClickHandler as event listener for that link */

    /* END LOOP: for each link */
  }

  addClickListenersToTags();

}