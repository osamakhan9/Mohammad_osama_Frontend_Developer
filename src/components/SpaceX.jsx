import React, { useEffect, useState } from "react";
import styles from "./Styles/space.module.css";
import axios from "axios";

export const SpaceX = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [status, type]);

  const fetchData = () => {
    axios
      .get(`https://api.spacexdata.com/v3/capsules`, {
        params: {
          status: status,
          type: type,
        },
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const Datehandle = (e) => {
    console.log(e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };
  const renderCapsules = () => {
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    const paginatedData = data.slice(startIndex, endIndex);

    return paginatedData.map((e) => (
      <div key={e.capsule_serial}>
        <img
          src="https://cdn.mos.cms.futurecdn.net/Rrfa4oEWQHekzXPW7K58fj.jpg"
          alt=""
          width="100%"
        />
        <div style={{ textAlign: "left" }}>
          <p>capsule_id: {e.capsule_id}</p>
          <p>capsule_serial: {e.capsule_serial}</p>
          <p>type: {e.type}</p>
          <p>landings: {e.landings}</p>
          <p>original_launch: {formatDate(e.original_launch)}</p>
          <p>status: {e.status}</p>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className={styles.filters}>

        <select onChange={handleTypeChange}>
          <option value="">Type </option>
          <option value="Dragon 1.0">Dragon 1.0</option>
          <option value="Dragon 1.1">Dragon 1.1</option>
          <option value="Dragon 2.0">Dragon 2.0</option>
        </select>
        <select onChange={handleStatusChange}>
          <option value="">Filter By Status</option>
          <option value="active">Active</option>
          <option value="retired">Retired</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div className={styles.box}>{renderCapsules()}</div>

      <div>
        {data.length > 0 && (
          <div className={styles.pagination}>
            {Array.from(
              { length: Math.ceil(data.length / 10) },
              (_, index) => index + 1
            ).map((pageNumber) => (
              <button
                key={pageNumber}
                className={
                  currentPage === pageNumber
                    ? `${styles.paginationButton} ${styles.active}`
                    : styles.paginationButton
                }
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SpaceX;
