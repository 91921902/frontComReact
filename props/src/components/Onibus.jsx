
/* { id: Date.now(), modelo: "Volvo B270F", placa: "ABC-1234", ano: 2018 },*/

export default function Onibus(props) {
    let onibus = props.onibus
  return (
    <div>
      <h2>Modelo:{onibus.modelo}</h2>
      <p>Placa:{onibus.placa}</p>
      <p>Ano:{onibus.ano}</p>
      <p>{onibus.id}</p>
    </div>
  )
}
