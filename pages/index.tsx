import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import PlanOptionInput from '../components/PlanOptionInput.tsx';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const prem = 981.24;
const deductible = 250;
const copayPct = 0.1;
const employerContrib = 0;

const spendAmts = [...Array(110).keys()].map((i: number) => i * 100);
const netCostFn = (annualPrem: number, deductible: number, copay: number, employerHSAContrib: number, oopMax: number, taxSavings: number, spent: number) => {
  if (spent < deductible) {
    return Math.min(
      (annualPrem + spent) - employerHSAContrib - taxSavings,
      oopMax
    )
  } else {
    return Math.min(
      (
        annualPrem
        + deductible
        + (copay * (spent - deductible))
      ) - employerHSAContrib - taxSavings,
      oopMax
    )
  }
}

const ppo250Fn = netCostFn.bind(
  null, prem, deductible, copayPct, employerContrib, 2250, 0);

const ppo750Fn = netCostFn.bind(
  null, 313.92, 750, 0.2, 0, 4200, 0);

const hdhpFn = netCostFn.bind(
  null, 0, 2800, 0.0, 600, 3425, 1000);

const lineData = {
  labels: spendAmts,
  datasets: [
    {
      label: 'PPO 250',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: spendAmts.map((v) => ppo250Fn(v))
    },
    {
      label: 'PPO 750',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,75,192,0.4)',
      borderColor: 'rgba(75,75,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,75,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,75,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: spendAmts.map((v) => ppo750Fn(v))
    },
    {
      label: 'HDHP',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(80,192,80,0.4)',
      borderColor: 'rgba(80,192,80,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(80,192,80,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(80,192,80,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: spendAmts.map((v) => hdhpFn(v))
    }
  ]
};
const lineOptions = {
  scales: {
    y: {
      title: {
        display: true,
        text: 'Net Cost'
      }
    },
    x: {
      title: {
        display: true,
        text: 'Care Dollars Spent',
        align: 'center'
      }
    }
  }
}
const LineInst = () => (
  <div>
    <h2>Net Healthcare Plan Cost</h2>
    <Chart
      type='line'
      options={lineOptions}
      data={lineData}
      width={800}
      height={400}
    />
  </div>
);
const Home: NextPage = () => {
  const [planOptions, setPlanOptions] = useState([{ planType: 'ppo', deductible: 850, yearlyPrem: 600, oopMax: 2000, copay: 10, employerHSAContrib: 0, taxSavings: 0 }])

  // handle input change
  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    planOptions[index][name] = value;
    updateLines();
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...planOptions];
    list.splice(index, 1);
    setPlanOptions(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setPlanOptions([...planOptions, { planType: "ppo"}]);
  };

  const updateLines = () => {
    planOptions.forEach((plan, i) => {
      const {planType, ...rest} = plan;
      
      if(Object.values(rest).every((v => !isNaN(v)))) {
        console.log(rest)
        calcFn = netCostFn.bind(
  null, rest.yearlyPrem, rest.deductible, rest.copay, rest.employerHSAContrib, rest.oopMax, rest.taxSavings);
        spendAmts.map((v) => ppo250Fn(v))
        lineData.datasets[i].data = rest;
      }
    })
  };



  return (
    <div className={styles.container}>
      <Head>
        <title>Healthcare Comparator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>Welcome to my healthcare plan cost comparison tool.
          Enter your plan details below to to see how they compare per dollar spent on care. Please note that this is a simplified model based on <a href='https://www.wealthfront.com/blog/high-deductible-health-plan/' className={styles.link}>Wealthfront's helpful guide.</a></p>

        <p>To estimate tax savings from contributing to an HSA plan, I personally used <a href='https://smartasset.com/taxes/income-taxes'> SmartAsset's Income Tax Calculator.</a></p>
        <>{LineInst()}</>
        {planOptions.map((x, i) => {
          return PlanOptionInput(x, i, planOptions.length, handleInputChange, handleAddClick, handleRemoveClick);
        })}

      </main>

      <footer className={styles.footer}>
        <a
          href="/__repl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built on
          <span className={styles.logo}>
            <Image src="/replit.svg" alt="Replit Logo" width={20} height={18} />
          </span>
          Replit
        </a>
      </footer>
    </div>
  )
}

export default Home
