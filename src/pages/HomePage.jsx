import ServiceAdd from '../components/ServiceAdd'
import ServiceList from '../components/ServiceList'
import ServiceFilter from '../components/ServiceFilter'

export default function HomePage() {
  return (
    <>
      <ServiceAdd />
      <ServiceFilter />
      <ServiceList />
    </>
  )
}
