let category1 = [
    {
        id:1,
        heading: 'computers',
        image: 'https://i.postimg.cc/rFD5qdmm/fili-santillan-qp51-FQh-Bn-S0-unsplash.jpg',
        desc: 'Laptops, Desktops, PC Gaming, Tablets, Monitors, etc.',
    },
    {
        id:2,
        heading: 'Accessories',
        image: 'https://i.postimg.cc/WbtYx6Jf/ella-don-q0k-B049zrr-M-unsplash.jpg',
        desc: 'Data storage, Music, Computer accessories, etc.',
    },
    {
        id:3,
        heading: 'Cellphones & Wearables',
        image: 'https://i.postimg.cc/nLPYPt2P/julian-o-hayon-o-W4t-Zeidfk-A-unsplash.jpg',
        desc: 'Cellphones, Cellular assessories, Wearable tech, etc.',
    },
    {
        id:4,
        heading: 'Gaming',
        image: 'https://i.postimg.cc/6qYmqPtJ/ella-don-Jomk-RNkz-Kh-E-unsplash.jpg',
        desc: 'Consoles, Games, Gaming laptops, Monitors, etc.',
    },
    {
        id:5,
        heading: 'Office & Stationery',
        image: 'https://i.postimg.cc/bv6cVLZv/alexa-williams-Ra-Yj-Mmma-SCA-unsplash.jpg',
        desc: 'Office furniture, Office automation, Stationary, etc.',
    },
    {
        id:6,
        heading: 'Photography',
        image: 'https://i.postimg.cc/mDz9tXMz/theregisti-HSXIp58y-Py-I-unsplash.jpg',
        desc: 'Lense, Camaras, General photograhic accessories, etc.',
    },
];
let displayCategory1 = document.querySelector("#category1");
category1.forEach((data) => {
    displayCategory1.innerHTML+= `
              <div class="card col-4 p-1 shadow-sm bg-secondary text-white">
                <img src="${data.image}" alt="" width="430px" height="278px">
                <div class="card-body">
                  <h4>${data.heading}</h4>
                  <p class="card-text">${data.desc}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button class="btn btn-sm btn-outline-secondary btn-dark">shop !</button>
                    </div>
                  </div>
                </div>
            </div>
            `;
});