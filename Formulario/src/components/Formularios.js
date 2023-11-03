import React, { useState } from "react";

export default function Formularios() {
  /*Forma avanzada*/
  /*Tipo texto, textarea */
  const [form, setForm] = useState({});

  const inputs = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  /*Tipo Check */
  const check = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const envio = (e) => {
    e.preventDefault(); //Hace que la pagina no c recargue cuando se envia
    alert("Enviado");
  }

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            className="form-control"
            id="nom"
            value={form.nom}
            onChange={inputs}
          />
        </div>

        <p>Jornada a Estudiar</p>

        <label htmlFor="mañana">Mañana</label>
        <input
          type="radio"
          id="mañana"
          className="est"
          name="est"
          value="Mañana"
          onChange={inputs}
          defaultChecked
        />

        <label htmlFor="tarde">Tarde</label>
        <input
          type="radio"
          id="tarde"
          className="est"
          name="est"
          value="tarde"
          onChange={inputs}
        />

        <p>Tipo de Documento</p>
        <select name="docum" onChange={inputs} defaultValue="" className="form-select">
          <option value="rc">RC</option>
          <option value="ti">TI</option>
          <option value="cc">CC</option>
        </select>

        <br />

        <label htmlFor="condi">Acepta los terminos</label>
        <input type="checkbox" id="condi" name="condi" className="condi" onChange={check} />

        <br />

        <input type="submit" onClick={envio} />
      </form>
    </div>
  );
}
