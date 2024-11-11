import React from 'react'
import styles from '../Styles/Dash.module.css';
const Dashboard2 = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.topNav}>
  
            <input type="text" placeholder="Search here..." />
            <div className={styles.userInfo}>Johnathan Doe</div>
        </div>
        <div className={styles.DashboardMain}>
            <h1>Dashboard</h1>
                <div className={styles.innerDash}>
                <div className={styles.div1}>
                      <div className={styles.data}>
                        <div className={styles.item}>
                          <div className={styles.info}>
                            <p>Fans</p>
                            <h3>27</h3>
                            <p>Power Consumption</p>
                            <h3>270</h3>
                          </div>
                          <div className={styles.dataImg}></div>
                        </div>
                        <div className={styles.item}>
                          <div className={styles.info}>
                            <p>Light</p>
                            <h3>65</h3>
                            <p>Power Consumption</p>
                            <h3>876</h3>
                          </div>
                          <div className={styles.dataImg}></div>
                        </div>
                        <div className={styles.item}>
                          <div className={styles.info}>
                            <p>Refrigerator</p>
                            <h3>4</h3>
                            <p>Power Consumption</p>
                            <h3>0</h3>
                          </div>
                          <div className={styles.dataImg}></div>
                        </div>
                        <div className={styles.item}>
                          <div className={styles.info}>
                            <p>Refrigerator</p>
                            <h3>4</h3>
                            <p>Power Consumption</p>
                            <h3>0</h3>
                          </div>
                          <div className={styles.dataImg}></div>
                        </div>
                      </div>
                      <div className={styles.consumptionGraph}>
                            <h3>Total Consumption Graph</h3>
                            <div className={styles.imageContainer}>

                            </div>
                    </div>
                    </div>
                   
                    <div className={styles.div2}>
                        <div className={styles.circleData}>
                            <h3>Power Consumption</h3>
                            <div className={styles.circleDivs}>
                            <div className={styles.divs1}>
                                <p>Hooter</p>
                                <h3>5000</h3>
                            </div>
                            <div className={styles.divs2}>
                                <p>Fans</p>
                                <h3>3,560</h3>  
                            </div>
                            <div className={styles.divs3}>
                                <p>Lights</p>
                                <h3>2,360</h3>
                            </div>
                            </div>
                        </div>
                        <div className={styles.graph}>
                            <h3>Current Power Consumption(Kw/H)</h3>
                            <h1>1633.00</h1>
                            <div className={styles.graphimg}>

                            </div>
                        </div>
                    </div>
            <div>

            </div>
        </div>
              
        </div>
           
      </div> 
    </>
  )
}

export default Dashboard2
