const toggleBtn = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

toggleBtn.addEventListener('click', function(){
  navMenu.classList.toggle('show-link')
})


/* FAQ */

const faqs = document.querySelectorAll('.faq');


faqs.forEach(function(any){
  const faqIcon = any.querySelector('.faq-icon');
  faqIcon.addEventListener('click', function(){

    faqs.forEach(function(closing){
      if(closing!==any){
        closing.classList.remove('show-answer')
      }
      
    });
    any.classList.toggle('show-answer')
  })


})


/* tutor */

const review = [
  {
      id:1,
      name: 'How to learn online',
      job: 'By Sufyan',
      text:
      'This is a wonderful time to be alive. There have never beenmore opportunities for creative and determined people to achieve  more of their goals than they can today. Regardless of short-term ups and downs in the economy and in your life, we are entering into an age of peace and prosperity superior to any previous era in human  history.'
  },
  {
      id: 2,
      name: 'Tips to Scale up your Business',
      job: 'By Chininso',
      text: 
      'In the year 1900, there were five thousand millionaires in America. By the year 2000, there were more than five million, most of them self-made, in one generation. Experts predict that there will be  another ten to twenty million millionaires created in the next twodecades. Your goal should be to become one of them. This book will  show you how.',
  },
  {
      id:3,
   
      name: 'Steps in learning Web develoment',
      job: 'By Ebuka',
      text: 'I worked as a construction laborer on tall buildings, and as a \
      seaman on a Norwegian Freighter in the North Atlantic. Often I slept \
      in my car, or in cheap rooming houses. When I was 23, I was working \
      as an itinerant farm laborer during the harvest, sleeping on the hay in \
      the barn and eating with the farmer’s family. I was uneducated, \
      unskilled, and at the end of the harvest, unemployed once more.'
  },
  { 
      id : 4,
      name: 'Why you are struggling in your business',
      job: 'By Emma',
      text: 'When I could no longer find a laboring job, I got a job in \
      straight commission sales, cold calling from office to office and from  \
      door-to-door. I would often work all day long to make a single sale so \
      that I could pay for my rooming house and have a place to sleep that \
      night. This was not a great start at life.',

  }
];

const title = document.querySelector('.tutor-title');
const job = document.querySelector('.tutor-job');
const text = document.querySelector('.tutor-text');
const image = document.querySelector('.tuttor-img')

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
      showNext(currentItem)
})

function showNext(x){
  const item = review[x];
      title.innerText = item.name;
      job.innerText = item.job;
      text.innerText = item.text;
      image.src = item.image;
      

}

const right = document.querySelector('.right');
const left = document.querySelector('.left');

right.addEventListener('click', function(){
      currentItem++;
      if(currentItem > review.length-1){
         currentItem = 0;
      }
      showNext(currentItem);
})

left.addEventListener('click', function(){
      currentItem--;
      if(currentItem < 0){
         currentItem = review.length-1;
      }
      showNext(currentItem);
})