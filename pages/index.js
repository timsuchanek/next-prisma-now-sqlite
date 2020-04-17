import React from 'react'
import Head from 'next/head'
import { PrismaClient } from '@prisma/client'
import { getSqlite } from '../src/getSqlite'

const sqlitePromise = getSqlite()

export const getServerSideProps = async () => {
  const sqlite = await sqlitePromise

  const db = `file:${sqlite}`

  try {
    const prisma = new PrismaClient({
      datasources: {
        db,
      },
    })

    const users = await prisma.user.findMany()

    return {
      props: {
        users,
      },
    }
  } catch (err) {
    console.log(err)
    return {
      props: {
        error: err.message,
        users: [],
      },
    }
  }
}

const Home = ({ users, error }) => {
  console.log(error)
  console.log(users)
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        {users &&
          users.map(({ id, email, name }) => (
            <ul key={id}>
              <li>
                <h1>{name}</h1>
              </li>
              <li>
                Email: <strong>{email}</strong>
              </li>
            </ul>
          ))}
      </div>
    </div>
  )
}

export default Home
