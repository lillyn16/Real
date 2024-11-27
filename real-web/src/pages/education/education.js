import React from 'react';
import './education.css'
// Make sure to include these imports:
import { GoogleGenerativeAI } from "@google/generative-ai";
// const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = "Tell me about Periods";

// const result = await model.generateContent(prompt);
// console.log(result.response.text());



const EducationPage = () => {
  return (
    <div className="education-container">
      <h1>
        Here are some helpful links to learn about your cycle.
      </h1>
      <div class = "fourboxes">
                    <div class="boxleft">
                      <h1>Just Started Information</h1>

                      <ul>
                      <li><a className='sources' href='https://www.youtube.com/watch?v=DBe7-PHRav8'>Menstruation: What To Expect</a></li>
                      <li><a className='sources' href='https://www.youtube.com/watch?v=_xP9oN4UvMQ'>Menstruation Animation</a></li>
                      <li><a className='sources' href='https://www.amazon.com/Care-Keeping-You-American-Wellbeing/dp/1683372301/ref=asc_df_1683372301/?tag=hyprod-20&linkCode=df0&hvadid=692875362841&hvpos=&hvnetw=g&hvrand=2821639354766220690&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9016676&hvtargid=pla-2281435179258&psc=1&mcid=50f0e933cd0b31328ad8acd49ff57661&hvocijid=2821639354766220690-1683372301-&hvexpln=73&tag=hyprod-20&linkCode=df0&hvadid=692875362841&hvpos=&hvnetw=g&hvrand=2821639354766220690&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9016676&hvtargid=pla-2281435179258&psc=1'>
                      The Care and Keeping of You 1: The Body Book for Younger Girls</a></li>
                      <li><a className='sources' href='https://www.amazon.com/Care-Keeping-American-Girl%C2%AE-Wellbeing/dp/168337231X/ref=pd_bxgy_thbs_d_sccl_1/133-5087500-7048560?pd_rd_w=OyfCg&content-id=amzn1.sym.53b72ea0-a439-4b9d-9319-7c2ee5c88973&pf_rd_p=53b72ea0-a439-4b9d-9319-7c2ee5c88973&pf_rd_r=BQ8V6CXV8Z8FC9WMS06F&pd_rd_wg=aC56b&pd_rd_r=565f3e94-53e2-467c-8b0a-a87a93119e86&pd_rd_i=168337231X&psc=1&asin=168337231X&revisionId=&format=4&depth=1'>
                      The Care and Keeping of You 2: The Body Book for Older Girls</a></li>
                      </ul>

                    </div>
                     <div class="boxright">
                        <h1>Period Information</h1>

                        <ul>
                          <li><a className='sources' href='https://www.youtube.com/watch?v=ayzN5f3qN8g'>How menstruation works - Emma Bryce</a></li>
                          <li><a className='sources' href='https://www.who.int/news-room/fact-sheets/detail/endometriosis#:~:text=Endometriosis%20is%20a%20disease%20in,period%20and%20last%20until%20menopause'>Endometriosis</a></li>
                          <li><a className='sources' href='https://www.hopkinsmedicine.org/health/conditions-and-diseases/polycystic-ovary-syndrome-pcos'>Polycystic Ovary Syndrome (PCOS)</a></li>
                          <li><a className='sources' href='https://my.clevelandclinic.org/health/diseases/11901-hpv-human-papilloma-virus'>HPV (Human Papillomavirus)</a></li>
                        </ul>
                    </div>
                    <div class="boxleft">
                        <h1>Adult Information</h1>

                        <ul>
                          <li><a className='sources' href='https://my.clevelandclinic.org/health/articles/10132-menstrual-cycle'>Menstrual Cycle</a></li>
                          <li><a className='sources' href='https://www.mayoclinic.org/healthy-lifestyle/getting-pregnant/in-depth/how-to-get-pregnant/art-20047611'>How to get pregnant</a></li>
                          <li><a className='sources' href='https://www.nia.nih.gov/health/menopause/what-menopause'>What Is Menopause?</a></li>
                        </ul>
                    </div>
                    <div class="boxright">
                        <h1>Teenager Information</h1>

                        <ul>
                          <li><a className='sources' href='https://www.healthforteens.co.uk/growing-up/puberty/periods-just-the-facts/#:~:text=Most%20females%20will%20have%20their,less%20frequent%20than%20this%20though'>Periods: Just the facts</a></li>
                          <li><a className='sources' href='https://playtextampons.com/blogs/the-blog/how-to-use-a-tampon'>How to Use a Tampon</a></li>
                          <li><a className='sources' href='https://www.youtube.com/watch?v=sNCFRK3gfPg'>How to Insert a Menstrual Cup</a></li>
                          <li><a className='sources' href='https://www.plannedparenthood.org/learn/health-and-wellness/menstruation/how-to-use-menstrual-hygiene-products'>How to Use Menstrual Hygiene Products</a></li>
                        </ul>
                    </div>
                </div>
    </div>
  );
};

export default EducationPage;