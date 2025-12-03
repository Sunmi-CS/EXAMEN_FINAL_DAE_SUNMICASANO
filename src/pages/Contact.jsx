import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Nombre es requerido";
    if (!form.email.trim()) e.email = "Email es requerido";
    else {
      // validation básica email
      const re = /\S+@\S+\.\S+/;
      if (!re.test(form.email)) e.email = "Email inválido";
    }
    if (!form.message.trim()) e.message = "Mensaje es requerido";
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      // simulamos envío
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 4000);
    }
  };

  return (
    <div className="col-md-8 mx-auto">
      <h2>Contacto</h2>

      {success && <div className="alert alert-success">Mensaje enviado con éxito</div>}

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-2">
          <label className="form-label">Nombre</label>
          <input
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="mb-2">
          <label className="form-label">Email</label>
          <input
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            rows="5"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>

        <button className="btn btn-success" type="submit">Enviar</button>
      </form>
    </div>
  );
}
