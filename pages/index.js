import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { FaUserAlt } from 'react-icons/fa';
import { HiIdentification } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'
import Time from '../src/components/Time';
import Day from '../src/components/Day';

export default function Home() {

  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [loading, setLoading] = useState(false);
  const [scheduleWeek, setScheduleWeek] = useState([])
  const [scheduleWeekEnd, setScheduleWeekEnd] = useState([])
  const [processed, setProssed] = useState(false);

  useEffect(() => {
    setScheduleWeek([
      "05h30 - 07h00",
      "07h00 - 08h30",
      "08h30 - 10h00",
      "10h00 - 11h30",
      "11h30 - 13h00",
      "13h00 - 14h30",
      "14h30 - 16h00",
      "16h00 - 17h30",
      "17h30 - 19h00",
      "19h00 - 20h30",
      "20h30 - 22h00"
    ]),
      setScheduleWeekEnd([
        "10h00 - 11h30",
        "11h30 - 13h00",
        "13h00 - 14h30",
        "14h30 - 16h00",
        "16h00 - 17h30"
      ])
  }, [])

  const execute = (data) => {
    setLoading(true);
    setProssed(true);
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="parallax" className="${styles.parallax} hero is-large">
        <div className="hero-body">
          <div className="column is-6 is-offset-6">
            <h1 className="title is-1 has-text-white">Gym Capacity</h1>
            <hr className="content-divider" />
            <h2 className="subtitle has-text-light">Choose your assistance for this week</h2>
            <a href="#" className="button is-white is-inverted">Next <svg className="svg-inline--fa fa-chevron-right fa-w-10" data-prefix="fad" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><g className="fa-group"><path className="fa-secondary" fill="currentColor" d="M188.74 256l56.78 56.89L91.21 466.9a24 24 0 0 1-33.94 0l-22.7-22.65a23.93 23.93 0 0 1 0-33.84z"></path><path className="fa-primary" fill="currentColor" d="M91.25 45.06l194.33 194a23.93 23.93 0 0 1 0 33.84l-40 40-211-211.34a23.92 23.92 0 0 1 0-33.84l22.7-22.65a24 24 0 0 1 33.97-.01z"></path></g></svg></a>
          </div>
        </div>
      </section>
      <main className="container">
        <form className="pt-5" onSubmit={handleSubmit(execute)}>
          <div className="columns is-centered">
            <div className="field column is-one-quarter">
              <label className="label">Identification: </label>
              <div className="control has-icons-left ">
                <input type="number" className="input is-info is-rounded" disabled={processed} {...register('id', { required: true, maxLength: 10, minLength: 10 })}></input>
                <span className="icon is-small is-left">
                  <span className="pl-3"><HiIdentification /></span>
                </span>
              </div>
              {errors.id && <span className="has-text-warning has-text-weight-semibold">Identification required.</span>}
            </div>
          </div>
          <div className="columns is-centered">
            <div className="field column is-one-quarter">
              <label className="label">Name: </label>
              <div className="control has-icons-left">
                <input type="text" className="input is-info is-rounded" disabled={processed} {...register('name', { required: true })}></input>
                <span className="icon is-small is-left">
                  <span className="pl-3"><FaUserAlt /></span>
                </span>
              </div>
              {errors.name && <span className="has-text-warning has-text-weight-semibold">Name required.</span>}
            </div>
          </div>
          <div className="columns is-centered">
            <div className="field column is-one-quarter">
              <label className="label">Email: </label>
              <div className="control has-icons-left">
                <input type="email" className="input is-info is-rounded" disabled={processed} {...register('email', { required: true })}></input>
                <span className="icon is-small is-left">
                  <span className="pl-3"><MdEmail /></span>
                </span>
              </div>
              {errors.name && <span className="has-text-warning has-text-weight-semibold">Email required.</span>}
            </div>
          </div>
          <div className="columns is-multiline is-centered cards-container" >
            <Day day="Monday" schedule={scheduleWeek} color="is-info" />
            <Day day="Tuesday" schedule={scheduleWeek} color="is-danger" />
            <Day day="Wednesday" schedule={scheduleWeek} color="is-success" />
            <Day day="Thursday" schedule={scheduleWeek} color="is-warning" />
            <Day day="Friday" schedule={scheduleWeek} color="is-black" />
            <Day day="Saturday" schedule={scheduleWeekEnd} color="is-link" />
            <Day day="Sunday" schedule={scheduleWeekEnd} color="is-primary" />
          </div>
          <div className="columns is-centered">
            <button type="submit" className="button is-info is-rounded" disabled={processed}>Process</button>
          </div>
        </form>


      </main>

      <footer >

      </footer>
    </div>
  )
}
