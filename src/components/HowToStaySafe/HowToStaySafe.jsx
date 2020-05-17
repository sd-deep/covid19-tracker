import React from 'react';
import styles from './HowToStaySafe.module.css';
import handWash from '../../images/undraw_wash_hands_nwl2.svg';
import socialDistancing from '../../images/undraw_social_distancing_2g0u.svg'
import medicalSupport from '../../images/undraw_medical_research_qg4d.svg'
import hello from '../../images/undraw_Hello_qnas.svg';
import Footer  from '../Footer/Footer'

function HowToStaySafe() {
    return (
        <div className={styles.container}>
            <div className={styles.contentContainerOdd}>
               <img src={handWash} alt="hand wash illustration" className={styles.illustration}/>
               <section className={styles.content}>
                   <h3>Wash your hands</h3>
                   <p>Wash your hands with soap and running water when <b><em>hands are visibly dirty</em></b></p>
                   <p>If your <b><em>hands are not visible dirty</em></b>, frequently clean them by using alcohol-based hand rub or soap and water</p>
                  <p>When coughing and sneezing <b><em>cover mouth and nose</em></b> with flexed elbow or tissue</p>
                  <p><b><em>Throw tissue into closed bin immediately after use</em></b></p>
                  <p><b><em>Clen hands</em></b> with alcohol-based hand rub or soap and water after coughing or sneezing and when caring for the sick</p>
               </section>
            </div>
            <div className={styles.contentContainerEven}>
               <img src={socialDistancing} alt="socialDistancing illustration" className={styles.illustration}/>
               <section className={styles.content}>
                   <h3>Social Distancing</h3>
                   <p><b><em>Avoid close contact</em></b>, maintain distance with others and wear mask while going out </p>
                   <p><b><em>Avoid spitting in public</em></b></p>
               </section>
            </div>
            <div className={styles.contentContainerOdd}>
            <img src={medicalSupport} alt="logo" className={styles.illustration} />
               <section className={styles.content}>
                   <h3>Medical Support</h3>
                   <p>If you have fever, cough and difficulty breathing <b><em>seek medical care early</em></b> and share previous travel history with your health care provider</p>
               </section>
            </div>
            <div className={styles.contentContainerEven}>
            <img src={hello} alt="logo" className={styles.illustration} />
               <section className={styles.content}>
                   <h3>Prevent Covid-19</h3>
                   <p>How should I greet another person to avoid catching the coronaviris?</p>
                  <p><b><em>To prevent COVID-19 it is safest to avoid physical contact when greeting.</em></b> Safe greetings include a wave, a nod, or a bow.</p>
                 
               </section>
            </div>
            <div className={styles.contentContainerOdd}>
                For in depth details visit<a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank" rel='noopener noreferrer'>: https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public</a> 
            </div>
            <Footer />
        </div>
    )
}

export default HowToStaySafe
