function formatDate(date_unformatted){
    var date = new Date(date_unformatted)
    var formated_date = date.toLocaleString("pt-br")
    return formated_date
}

export default formatDate