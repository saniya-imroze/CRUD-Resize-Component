import React, { useState } from "react";
import './EditModal.css';

const EditModal = ({ isOpen, onClose, onSave, initialData, editedData }) => {
  const [data, setData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(true);

  const handleSave = () => {
    onSave(data);
    setIsEditing(false);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    editedData({ ...data, [name]: value }); // Pass edited data up to the parent
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content" style={{ fontSize: '10px' , fontWeight : '500' }}>
        {isEditing && (
          <>
            <div>
              <label>
                Name:{" "}
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Profession:{" "}
                <input
                  type="text"
                  name="profession"
                  value={data.profession}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Role:{" "}
                <input
                  type="text"
                  name="role"
                  value={data.role}
                  onChange={handleChange}
                />
              </label>
            </div>
            <button style={buttonStyle} onClick={handleSave}>Save</button>
          </>
        )}
      </div>
    </div>
  );
};

export default EditModal;

const buttonStyle = {
  backgroundColor: "#5adbb5",
  border: "none",
  color: "white",
  padding: "8px 10px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "10px",
  margin: "4px 2px",
  cursor: "pointer",
  borderRadius: "10px"
};