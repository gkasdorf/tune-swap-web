const convertDate = (mysqlDate) => {
    mysqlDate = mysqlDate.replace("T", " ");
    mysqlDate = mysqlDate.split(".")[0]
    const t = mysqlDate.split(/[- :]/);
    const d = new Date(Date.UTC(t[0], t[1]-1, t[2], t[3], t[4], t[5]));

    const formattedDate = d.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    return formattedDate;
}

export default convertDate;
