

import Onibus from '../components/Onibus';
import Titulo from '../components/Titulo'

export default function Portifolio() {
    const buzoes = [
        { id: Date.now(), modelo: "Volvo B270F", placa: "ABC-1234", ano: 2018 },
        { id: Date.now() + 1, modelo: "Mercedes-Benz OF-1721", placa: "DEF-5678", ano: 2020 },
        { id: Date.now() + 2, modelo: "Scania K310", placa: "GHI-9012", ano: 2019 },
        { id: Date.now() + 3, modelo: "Marcopolo Paradiso", placa: "JKL-3456", ano: 2021 },
        { id: Date.now() + 4, modelo: "Neobus Mega Plus", placa: "MNO-7890", ano: 2017 },
        { id: Date.now() + 5, modelo: "Volkswagen 17.230", placa: "PQR-1122", ano: 2016 },
        { id: Date.now() + 6, modelo: "MAN 18.280", placa: "STU-3344", ano: 2019 },
        { id: Date.now() + 7, modelo: "Agrale MA 15.0", placa: "VWX-5566", ano: 2015 },
        { id: Date.now() + 8, modelo: "Iveco CityClass", placa: "YZA-7788", ano: 2020 },
        { id: Date.now() + 9, modelo: "Volare W9", placa: "BCD-9900", ano: 2018 },
        { id: Date.now() + 10, modelo: "Caio Apache VIP", placa: "EFG-1234", ano: 2021 },
        { id: Date.now() + 11, modelo: "Comil Campione", placa: "HIJ-5678", ano: 2017 },
        { id: Date.now() + 12, modelo: "Marcopolo Torino", placa: "KLM-9012", ano: 2016 },
        { id: Date.now() + 13, modelo: "Neobus Spectrum", placa: "NOP-3456", ano: 2019 },
        { id: Date.now() + 14, modelo: "Busscar Urbanuss", placa: "QRS-7890", ano: 2018 },
        { id: Date.now() + 15, modelo: "Volvo B340M", placa: "TUV-1122", ano: 2020 },
        { id: Date.now() + 16, modelo: "Mercedes-Benz OF-1519", placa: "WXY-3344", ano: 2021 },
        { id: Date.now() + 17, modelo: "Scania K360", placa: "ZAB-5566", ano: 2017 },
        { id: Date.now() + 18, modelo: "Marcopolo Audace", placa: "CDE-7788", ano: 2019 },
        { id: Date.now() + 19, modelo: "Volkswagen 9.160", placa: "FGH-9900", ano: 2018 }
    ];
    
   
    
  return (
    <div>
      <Titulo texto={"Portfólio"} emoji={"😂🤣🤗😁"}/>
      <p>estamos na página portifólio</p>

      {buzoes.map((onibus) => (
         <Onibus onibus={onibus} key={onibus.id}/>
      ) )}

     
    </div>
  )
}
