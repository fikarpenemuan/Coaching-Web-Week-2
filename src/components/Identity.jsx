

const Identity = ({npm, name, github}) => {
  return (
    <div>
        <h1>Idintitas</h1>
        <p>NPM: {npm}</p>
        <p>Name: {name}</p>
        <p><a href={github} target="_blank">Klik Link Github</a></p>
        </div>
  )
}

export default Identity