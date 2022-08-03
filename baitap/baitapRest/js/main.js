const tinhDiemTB = (...param) => {
    let tongDiem = 0;
    let diemTB = 0;

    for (let i in param) {
        tongDiem += param[i];
        diemTB = tongDiem / param.length;
    }
    return diemTB;
}


const getElement = (id) => document.querySelector(id);

getElement('#btnKhoi1').onclick = () => {

    const diemToan = Number(getElement('#inpToan').value);
    const diemLy = Number(getElement('#inpLy').value);
    const diemHoa = Number(getElement('#inpHoa').value);

    const diemTrungBinh = tinhDiemTB(diemToan, diemLy, diemHoa);

    getElement('#tbKhoi1').innerHTML = diemTrungBinh;
}


getElement('#btnKhoi2').onclick = () => {

    const diemVan = Number(getElement('#inpVan').value);
    const diemSu = Number(getElement('#inpSu').value);
    const diemDia = Number(getElement('#inpDia').value);
    const diemAnh = Number(getElement('#inpEnglish').value);

    const diemTrungBinh = tinhDiemTB(diemVan, diemSu, diemDia, diemAnh);

    getElement('#tbKhoi2').innerHTML = diemTrungBinh;
}