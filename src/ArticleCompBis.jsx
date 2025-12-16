import React, { useState } from "react";

function ArticleCompBis(props) {
  const { code, nom, categorie, prixU } = props.donnees;
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ code, nom, categorie, prixU });

  React.useEffect(() => {
    setForm({ code, nom, categorie, prixU });
  }, [code, nom, categorie, prixU]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSave() {
    // call updater with old code so change of code is handled
    if (props.onUpdate) props.onUpdate(code, form);
    setEditing(false);
  }

  function handleDelete() {
    if (props.onDelete) props.onDelete(code);
  }

  return (
    <tr>
      <td>
        {editing ? (
          <input name="code" value={form.code} onChange={handleChange} />
        ) : (
          code
        )}
      </td>
      <td>
        {editing ? (
          <input name="nom" value={form.nom} onChange={handleChange} />
        ) : (
          nom
        )}
      </td>
      <td>
        {editing ? (
          <select name="categorie" value={form.categorie} onChange={handleChange}>
            <option value="Sport">Sport</option>
            <option value="Ordinateur">Ordinateur</option>
          </select>
        ) : (
          categorie
        )}
      </td>
      <td>
        {editing ? (
          <input name="prixU" value={form.prixU} onChange={handleChange} />
        ) : (
          prixU
        )}
      </td>
      <td>
        {editing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => { setEditing(false); setForm({ code, nom, categorie, prixU }); }}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </td>
    </tr>
  );
}

export default ArticleCompBis;
