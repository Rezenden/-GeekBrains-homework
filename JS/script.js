const goods = [
    {
        title: "Shirt", price: 150
    }, 
    {
        title: "Socks", price: 50
    }
    , {
        title: "Jacket"
    }, 
    {
        title: "Shoes", price: 250
    }
]
const renderGoodsItem = (title, price) => {
    if (price === undefined) {
        price = 'value is missing <br> in the database :(';
        } 
    return `<div class="goods-item">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 439.832 439.832" style="enable-background:new 0 0 439.832 439.832;" xml:space="preserve"><g><g>
		<path d="M225.36,259.98h-22.48c-1.417-4.285-3.155-8.457-5.2-12.48l16-16c3.102-3.12,3.102-8.16,0-11.28l-28.8-28.8    c-3.12-3.102-8.16-3.102-11.28,0l-16,16c-3.951-1.955-8.043-3.613-12.24-4.96v-22.48c0-4.418-3.582-8-8-8H96.4    c-4.418,0-8,3.582-8,8v23.36c-4.033,1.372-7.963,3.029-11.76,4.96L60,191.741c-3.12-3.102-8.16-3.102-11.28,0L20,220.46    c-3.102,3.12-3.102,8.16,0,11.28l16.8,16.8c-1.862,3.698-3.466,7.52-4.8,11.44H8c-4.418,0-8,3.582-8,8v40.72c0,4.418,3.582,8,8,8    h24c1.3,3.972,2.877,7.849,4.72,11.6L20,345.26c-3.102,3.12-3.102,8.16,0,11.28l28.8,28.8c3.12,3.102,8.16,3.102,11.28,0    l16.56-16.56c3.798,1.929,7.728,3.587,11.76,4.96v23.36c0,4.418,3.582,8,8,8h40.72c4.418,0,8-3.582,8-8v-22.88    c4.197-1.349,8.288-3.006,12.24-4.96l16,16c3.12,3.102,8.16,3.102,11.28,0l28.8-28.8c3.102-3.12,3.102-8.16,0-11.28l-16-16    c2.048-4.022,3.786-8.194,5.2-12.48h22.48c4.418,0,8-3.582,8-8v-40.72C233.122,263.654,229.684,260.11,225.36,259.98z     M217.36,300.7h-20.48c-3.742-0.118-7.066,2.374-8,6c-1.702,6.912-4.397,13.541-8,19.68c-1.883,3.144-1.388,7.166,1.2,9.76    l14.48,14.48l-17.52,17.44l-14.64-14.64c-2.562-2.575-6.537-3.1-9.68-1.28c-6.115,3.594-12.716,6.289-19.6,8    c-3.657,0.903-6.19,4.234-6.08,8v20.96H104.4v-21.28c0.118-3.742-2.374-7.066-6-8c-6.72-1.747-13.158-4.441-19.12-8    c-3.144-1.883-7.166-1.388-9.76,1.2l-15.2,15.2l-17.44-17.28L52,335.58c2.575-2.562,3.1-6.537,1.28-9.68    c-3.54-5.915-6.233-12.297-8-18.96c-0.934-3.626-4.258-6.118-8-6H16.16v-24.96H38c3.742,0.118,7.066-2.374,8-6    c1.772-6.661,4.464-13.043,8-18.96c1.561-3.261,0.741-7.163-2-9.52l-15.12-15.36L54.4,208.7l15.2,15.2    c2.594,2.588,6.616,3.083,9.76,1.2c5.966-3.551,12.403-6.245,19.12-8c3.594-0.965,6.047-4.281,5.92-8v-21.12h24.72v20.96    c-0.11,3.766,2.423,7.097,6.08,8c6.884,1.71,13.485,4.405,19.6,8c3.143,1.82,7.118,1.295,9.68-1.28l14.64-14.72l17.52,17.44    l-14.56,14.56c-2.588,2.594-3.083,6.616-1.2,9.76c3.607,6.137,6.302,12.767,8,19.68c0.934,3.626,4.258,6.118,8,6h20.48    L217.36,300.7z"/></g></g><g><g>
		<path d="M116.8,243.981c-24.742,0-44.8,20.058-44.8,44.8s20.058,44.8,44.8,44.8c24.742,0,44.8-20.058,44.8-44.8    C161.556,264.056,141.524,244.025,116.8,243.981z M116.8,317.34v0.24c-15.906,0-28.8-12.894-28.8-28.8s12.894-28.8,28.8-28.8    c15.906,0,28.8,12.894,28.8,28.8C145.468,304.592,132.613,317.341,116.8,317.34z"/></g></g><g><g>
		<path d="M439.683,148.359c-0.025-0.127-0.052-0.253-0.083-0.378l-8.64-39.44c-0.956-4.304-5.214-7.023-9.52-6.08l-21.92,4.8    c-2.381-3.879-5.055-7.57-8-11.04L404,77.181c2.379-3.713,1.306-8.65-2.4-11.04l-34.4-22.16c-3.713-2.379-8.65-1.306-11.04,2.4    l-12.32,19.2c-4.285-1.071-8.644-1.82-13.04-2.24l-4.88-22.4c-0.99-4.306-5.284-6.994-9.589-6.003    c-0.111,0.025-0.221,0.053-0.331,0.083l-40,8.72c-4.303,0.956-7.023,5.214-6.08,9.52l5.6,22.72    c-3.663,2.203-7.165,4.662-10.48,7.36L245.28,70.7c-3.713-2.379-8.65-1.306-11.04,2.4L212,107.421    c-2.379,3.713-1.306,8.65,2.4,11.04l20,12.8c-1.006,4.051-1.728,8.168-2.16,12.32l-23.28,5.12c-4.304,0.956-7.023,5.214-6.08,9.52    l8.72,40c0.956,4.304,5.214,7.023,9.52,6.08l23.28-5.04c2.295,3.533,4.835,6.901,7.6,10.08l-12.8,20    c-2.379,3.713-1.306,8.65,2.4,11.04l34.24,22c3.713,2.379,8.65,1.306,11.04-2.4l12.64-19.76c4.126,1.073,8.323,1.848,12.56,2.32    l4.96,22.8c0.805,3.753,4.162,6.405,8,6.32h1.68l40-8.64c4.058-1.305,6.38-5.562,5.28-9.68l-4.88-22.4    c3.802-2.213,7.438-4.7,10.88-7.44l19.44,12.48c3.713,2.379,8.65,1.306,11.04-2.4l22-34.32c2.458-3.671,1.475-8.64-2.196-11.098    c-0.093-0.063-0.188-0.123-0.284-0.182l-18.96-12.16c1.135-4.36,1.937-8.799,2.4-13.28l21.92-4.8    C437.697,156.896,440.528,152.696,439.683,148.359z M402.32,148.541c-3.551,0.758-6.146,3.813-6.32,7.44    c-0.246,7.163-1.54,14.252-3.84,21.04c-1.164,3.479,0.188,7.305,3.28,9.28l17.28,11.04l-13.36,20.8l-17.44-11.2    c-3.073-1.967-7.088-1.605-9.76,0.88c-5.211,4.79-11.084,8.805-17.44,11.92c-3.313,1.612-5.097,5.278-4.32,8.88l4.48,20.48    l-24,5.28l-4.56-20.8c-0.758-3.551-3.813-6.146-7.44-6.32c-6.948-0.307-13.816-1.6-20.4-3.84c-0.826-0.272-1.691-0.407-2.56-0.4    c-2.72,0.005-5.251,1.391-6.72,3.68l-11.6,18.08l-20.8-13.36l11.2-18.4c1.967-3.073,1.605-7.088-0.88-9.76    c-4.659-5.056-8.591-10.737-11.68-16.88c-1.638-3.282-5.298-5.029-8.88-4.24l-21.28,4.64l-5.28-24l21.28-4.64    c3.579-0.766,6.181-3.863,6.32-7.52c0.506-6.946,1.987-13.787,4.4-20.32c1.123-3.456-0.224-7.234-3.28-9.2l-18.24-11.68    l13.36-20.8l17.6,11.36c3.091,2.009,7.155,1.645,9.84-0.88c5.058-4.781,10.768-8.821,16.96-12c3.217-1.655,4.923-5.263,4.16-8.8    l-4.56-20.8l24-5.28l4.48,20.48c0.805,3.753,4.162,6.405,8,6.32c7.071,0.188,14.077,1.4,20.8,3.6    c3.456,1.123,7.234-0.224,9.2-3.28l11.2-17.44l20.8,13.36l-11.12,17.28c-1.988,3.109-1.591,7.174,0.96,9.84    c4.775,5.235,8.763,11.137,11.84,17.52c1.638,3.282,5.298,5.03,8.88,4.24l20-4.32l5.28,24L402.32,148.541z"/></g></g><g><g>
		<path d="M365.2,143.741c-4.422-20.62-22.671-35.333-43.76-35.28c-24.742-0.009-44.807,20.041-44.817,44.783    s20.041,44.807,44.783,44.817c24.742,0.009,44.807-20.041,44.817-44.783C366.224,150.071,365.881,146.874,365.2,143.741z     M327.44,181.421h0.08c-15.505,3.142-30.702-6.599-34.32-22c-3.37-15.547,6.466-30.891,22-34.32c2.025-0.43,4.09-0.644,6.16-0.64    c15.906-0.023,28.819,12.852,28.842,28.758C350.222,166.813,340.733,178.57,327.44,181.421z"/></g></g>
</svg>
    <h3 class="title-text">name: ${title}</h3>
    <p class="txt-text">price: ${price}</p>
  </div>`;
}
const renderGoodsList = (list) => {
    const goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList;
}
renderGoodsList(goods);