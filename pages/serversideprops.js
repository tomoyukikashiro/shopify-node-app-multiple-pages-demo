export async function getServerSideProps(context) {
  return {
    // Usually, we will get user's data from our DB.
    // But I set data for now. because it's demo.
    props: {
      time: (new Date()).toLocaleTimeString()
    }
  }
}

const ServerSideProps = ({time}) => (
  <>
    <h1>page with serverSideProps.</h1>
    <p>{time}</p>
  </>

)

export default ServerSideProps
