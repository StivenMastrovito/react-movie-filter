import { useState, useEffect } from 'react'
import './App.css'

// const film = [
//   {
//     id: 1,
//     title: "Action Comics #1000: The Deluxe Edition",
//     thumb: "https://imgs.search.brave.com/aUNyvZBXUulb963JH7KnQm9AMr8bcBoLsiHREOqayIU/rs:fit:612:612:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvOWZm/ZWYzMDMtMGZhYy00/OGRkLTg3ODctYzUy/NTk0MDk2ODAwXzEu/MTc1ZDk1Mjg2NzY0/OGEwOTczMTY2NGMy/MTE1NjNlYWIuanBl/Zz9vZG5XaWR0aD02/MTImb2RuSGVpZ2h0/PTYxMiZvZG5CZz1m/ZmZmZmY",
//   },
//   {
//     id: 2,
//     title: "American Vampire 1976 #1",
//     thumb: "https://imgs.search.brave.com/OU2E3_3vA7flyv-SJ3TcFW1d99KDlp5ZfmW9ylLLFDo/rs:fit:1012:1200:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnN1/cGVycG91dm9pci5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDcvQW1lcmlj/YW4tVmFtcGlyZS0x/OTc2LTAxLWNvdi1B/bGJ1cXVlcnF1ZS0y/MDIwLmpwZz9yZXNp/emU9MTAxMiUyQzE1/NTYmc3NsPTE",
//     },
//   {
//     id: 3,
//     title: "Aquaman Vol. 4: Underworld",
//     thumb: "https://imgs.search.brave.com/gAZQuZyt6WjcUWF6aXCIBaiJqtOJAK-X4nxS9Vbvwno/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4y/LnBlbmd1aW4uY29t/LmF1L2NvdmVycy9v/cmlnaW5hbC85Nzgx/NDAxMjc1NDI2Lmpw/Zw",
//     },
//   {
//     id: 4,
//     title: "Batgirl #1",
//     thumb: "https://imgs.search.brave.com/YET9wY29Aa29TyHqlbieS9qsz3HWyNYQx-WkRqdBRX4/rs:fit:640:984:1/g:ce/aHR0cDovL2dldHlv/dXJjb21pY29uLmNv/LnVrL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE2LzA4L2JhdGdp/cmwtcmViaXJ0aC0x/LWNvdmVyLmpwZw",
//     },
//   {
//     id: 5,
//     title: "Batman #56",
//     thumb: "https://imgs.search.brave.com/jgxYlrx442aozemzjqdmCsd9DkIkRollJp1T8sG8TfE/rs:fit:720:1106:1/g:ce/aHR0cHM6Ly9veXN0/ZXIuaWduaW1ncy5j/b20vd29yZHByZXNz/L3N0Zy5pZ24uY29t/LzIwMTgvMTAvU1RM/MDk3MDk1LTcyMHgx/MTA2LmpwZw",
//     },
//   {
//     id: 6,
//     title: "Batman Beyond #1",
//     thumb: "https://imgs.search.brave.com/jgxYlrx442aozemzjqdmCsd9DkIkRollJp1T8sG8TfE/rs:fit:720:1106:1/g:ce/aHR0cHM6Ly9veXN0/ZXIuaWduaW1ncy5j/b20vd29yZHByZXNz/L3N0Zy5pZ24uY29t/LzIwMTgvMTAvU1RM/MDk3MDk1LTcyMHgx/MTA2LmpwZw",
//     },
//   {
//     id: 7,
//     title: "Batman/Superman #1",
//     thumb: "https://imgs.search.brave.com/cSaB3m-tghN3_Cllp9IOlUPEPsyShCnl8gijRyPFdrg/rs:fit:791:1200:1/g:ce/aHR0cHM6Ly8xNDk0/NTUxNTIudjIucHJl/c3NhYmxlY2RuLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OS8wOC9CTVNNX0N2/MV9CQVQuanBn",
//     },
//   {
//     id: 8,
//     title: "Batman/Superman Annual #1",
//     thumb: "https://imgs.search.brave.com/jfaQd--WUx7RG8MiQ-VyCOqLUJW19ojBnjkNOG81rL4/rs:fit:666:1024:1/g:ce/aHR0cHM6Ly90aGVn/d3cuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzA5L0Jh/dG1hbi1TdXBlcm1h/bi1Bbm51YWwtQ3Yx/LTY2NngxMDI0Lmpw/Zw",
//     },
//   {
//     id: 9,
//     title: "Batman: The Joker War Zone #1",
//     thumb: "https://imgs.search.brave.com/kSLCPBIeE9s218LRC4cIyrHOYmxrSS2Wt7LvNNfED2I/rs:fit:455:700:1/g:ce/aHR0cHM6Ly9jb21p/Y2Jvb2tyZWFsbS5j/b20vY292ZXItc2Nh/bi81ZmFmMTFjYTk1/NGQ1MGVjZDA1ZmU3/M2U1NjBiNWQyOC94/bC8tLWlzc3VlLTEu/anBn",
//     },
//   {
//     id: 10,
//     title: "Batman: Three Jokers #1",
//     thumb: "https://imgs.search.brave.com/a6fAPUra4t94xMJFlYv6X7Lwm4z_qPmslx7Hiqafbok/rs:fit:600:923:1/g:ce/aHR0cHM6Ly9jZG4u/ZmxpY2tlcmluZ215/dGguY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzA4L0Jh/dG1hbi1UaHJlZS1K/b2tlcnMtMS02MDB4/OTIzLTEuanBn",
//   },
// ];

const films = [
  { title: 'Inception', genere: 'Fantascienza' },
  { title: 'Il Padrino', genere: 'Thriller' },
  { title: 'Titanic', genere: 'Romantico' },
  { title: 'Batman', genere: 'Azione' },
  { title: 'Interstellar', genere: 'Fantascienza' },
  { title: 'Pulp Fiction', genere: 'Thriller' },
]

let generi = [""];
films.forEach((film) => {
  !generi.includes(film.genere) && generi.push(film.genere)
})


function App() {
  const [filterName, setFilterName] = useState("")
  const [filterGenere, setFilterGenere] = useState("")
  const [filteredFilms, setFilteredFilms] = useState(films);

  const [newName, setNewName] = useState("")
  const [newGenere, setNewGenere] = useState("")

  useEffect(() => {
    const copyArray = films.filter(({ title, genere }) => title.toLowerCase().includes(filterName.toLowerCase()) && genere.includes(filterGenere));
    setFilteredFilms(copyArray);
  }, [filterGenere, filterName])

  function addFilm(event) {
    event.preventDefault();
    films.push({ title: newName, genere: newGenere })
    setFilteredFilms(films);
    setNewName("");
  }

  return (
    <>
      <h1>BOOFILMS</h1>
      <section>
        <div className='filter_grid'>
          <div className='filter' >
            <label htmlFor="">Filtra per nome</label>
            <input type="text" placeholder='Filtra...' value={filterName} onChange={(event) => { setFilterName(event.target.value) }} />
          </div>
          <div className='filter'>
            <label htmlFor="">Filtra per Genere</label>
            <select name="generi" id="" onChange={(event) => {
              setFilterGenere(event.target.value);
            }}>
              {generi.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="film-grid">
          {filteredFilms.map((film, index) => (
            <div key={index} className="card">
              <h2>Titolo: {film.title}</h2>
              <h3>Genere: {film.genere}</h3>
            </div>
          ))}
        </div>
        <form action="" onSubmit={(event) => addFilm(event)}>
          <h3>AGGIUNGI FILM</h3>
          <div>
            <label htmlFor="">Nome</label>
            <input type="text" value={newName} onChange={(event) => { setNewName(event.target.value) }} />
          </div>
          <div>
            <label htmlFor="">Genere</label>
            <select name="nuovofilm" id="" onChange={(event) => {
              setNewGenere(event.target.value);
            }}>
              {generi.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
          </div>

          <button className='add' type='submit'>AGGIUNGI</button>
        </form>

      </section>
    </>
  )
}

export default App
