////function getCurrentDate() {
////    var date = new Date();

////    var dateString =
////        date.getUTCFullYear() + "-" +
////        ("0" + (date.getUTCMonth() + 1)).slice(-2) + "-" +
////        ("0" + date.getUTCDate()).slice(-2);

////    return new Date(dateString);
////}

function customizeDate(inputId) {
    setValueById(inputId, getValueById(inputId).replace(/[^0-9.\.]/g, ''));  //prevent alphabet typing

    let val = getValueById(inputId);

    // switch case
    switch (val.length) {
        case 1:
            if (val <= 3)
                return false;
            setValueById(inputId, '0' + val.slice(-2) + '.');
            break;

        case 2:
            if (val.substring(0, 2) > 31)
                setValueById(inputId, '01.');
            else
                if (val[val.length - 1] != '.')
                    setValueById(inputId, val + '.');
            return false;

        case 3:
            if (val.substring(0, 2) > 31)
                setValueById(inputId, '01.');
            else
                if (val[val.length - 1] != '.')
                    setValueById(inputId, val + '.');
            return false;

        case 4:
            if (val[val.length - 1] == '0')
                return false;
            if (val[val.length - 1] == '.')
                return false;
            if (val[val.length - 1] != '1')
                setValueById(inputId, val.split('.')[0] + '.0' + val.split('.')[1] + '.');
            break;

        case 5:
            if (val.split('.')[1] > 12) {
                setValueById(inputId, val.split('.')[0] + '.12' + '.');
                return false;
            }
            else
                if (val[val.length - 1] == '.')
                    return false;
            setValueById(inputId, val + '.');
            break;
    }

    //check for Febuary
    if (val.length == 10) {       
        let month = val.split('.')[1];

        if (month == '02')
        if (val.split('.')[2] % 4 == 0) {
            if (val.substring(0, 2) > 29)
                setValueById(inputId, '29.' + val.split('.')[1] + '.' + val.split('.')[2]);
        }
        else {
            if (val.substring(0, 2) > 28)
                setValueById(inputId, '28.' + val.split('.')[1] + '.' + val.split('.')[2]);
        }
    }

    if (val.length > 10) {
        setValueById(inputId, val.substring(0, 10));
        return false;
    }

    if (val.length > 5) {

        checkMonthAndDay(inputId);

        if (val.length == 6) {
            if (val.split('.')[1] > 12) {
                setValueById(inputId, val.split('.')[0] + '.12' + '.');
                return false;
            }
            if (val.split('.')[0] > 31) {
                setValueById(inputId, '01.' + val.split('.')[1] + '.');
                return false;
            }
            return false;
        }
        else {
            if (val.split('.')[1] > 12) {
                setValueById(inputId, val.split('.')[0] + '.12' + '.' + val.split('.')[2]);
                return false;
            }
            if (val.split('.')[0] > 31) {
                setValueById(inputId, '01.' + val.split('.')[1] + '.' + val.split('.')[2]);
                return false;
            }
        }
        return false;
    }

}

function checkMonthAndDay(inputId) {
    let val = getValueById(inputId);

    checkDay(inputId, val);

    let month = val.split('.')[1];

    if (month == '00')
        setValueById(inputId, val.split('.')[0] + '.01' + '.' + val.split('.')[2]);
    else if (month == '04' || month == '06' || month == '09' || month == '11')
        if (val.substring(0, 2) > 30)
            setValueById(inputId, '30.' + val.split('.')[1] + '.' + val.split('.')[2]);    
}


function checkDay(inputId, val) {
    if (val.substring(0, 2) == '00')
        setValueById(inputId, '01.' + val.split('.')[1] + '.' + val.split('.')[2]);
}

function getValueById(inputId) {
    return document.getElementById(inputId).value;
}

function setValueById(inputId, value) {
    document.getElementById(inputId).value = value;
}

