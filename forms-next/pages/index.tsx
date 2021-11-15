import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import ControlledInput from './ControlledInput'

const Home: NextPage = () => {
    // const [values, setValues] = useState({
    //   controlled: "",
    //   uncontrolled: ""
    // })

    // const handleSubmit = () =>{
    //   setValues({...values})
    // }



  return (
    <div className={styles.container}>
      {/* <ControlledInput handleSubmit={handleSubmit} /> */}
    </div>
  )
}

export default Home
