import Head from "next/head";
import styles from '../styles/Home.module.css'
import { getAllData } from '../mockup'; 
import PageItem from '../components/PageItem';

export default function Home() {
  const data = getAllData();
  const { fileOIDs, filesMap } = data;

  return (
    <div className={styles.container}>
      <PageItem />
      {fileOIDs.map(item => <PageItem key={item} ids={item} data={filesMap[item]} />)}      
    </div>
  )
}
