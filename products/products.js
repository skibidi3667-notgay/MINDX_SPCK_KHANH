// 1. DATABASE (Mảng chứa các Object sản phẩm)
const productData = [
    // Nổi bật
    { id: "aothun-basic", name: "Áo Thun Basic", price: "399.000đ", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600", category: "featured" },
    { id: "aokhoac-luxury", name: "Áo Khoác Luxury", price: "899.000đ", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600", category: "featured" },
    { id: "dam-thoitrang", name: "Đầm Thời Trang", price: "699.000đ", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600", category: "featured" },
    
    // Nam
    { id: "somi-nam", name: "Sơ Mi Nam", price: "599.000đ", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600", category: "men" },
    { id: "aokhoac-nam", name: "Áo Khoác Nam", price: "799.000đ", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", category: "men" },
    { id: "quanjean-nam", name: "Quần Jean Nam", price: "499.000đ", img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600", category: "men" },
    
    // Nữ
    { id: "aolen-nu", name: "Áo Len Nữ", price: "559.000đ", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600", category: "women" },
    { id: "setnu", name: "Set Nữ Cao Cấp", price: "999.000đ", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600", category: "women" },
    { id: "damhoa", name: "Đầm Hoa", price: "699.000đ", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600", category: "women" }
];

function displayProducts() {
    const featuredGrid = document.getElementById('featured-grid');
    const menGrid = document.getElementById('men-grid');
    const womenGrid = document.getElementById('women-grid');


    const convertToHTML = (product) => {
        return `
            <div class="card">
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <a href="../details/${product.id}.html">Xem chi tiết</a>
            </div>
        `;
    };

    // Lọc và Map sản phẩm Nổi bật
    const featuredHTML = productData
        .filter(item => item.category === 'featured')
        .map(item => convertToHTML(item))
        .join(''); // Biến mảng thành chuỗi để ép vào innerHTML

    // Lọc và Map sản phẩm Nam
    const menHTML = productData
        .filter(item => item.category === 'men')
        .map(item => convertToHTML(item))
        .join('');

    // Lọc và Map sản phẩm Nữ
    const womenHTML = productData
        .filter(item => item.category === 'women')
        .map(item => convertToHTML(item))
        .join('');

    // Đổ dữ liệu ra màn hình
    if (featuredGrid) featuredGrid.innerHTML = featuredHTML;
    if (menGrid) menGrid.innerHTML = menHTML;
    if (womenGrid) womenGrid.innerHTML = womenHTML;
}

// 3. CHẠY HÀM KHI TRANG TẢI XONG
window.onload = displayProducts;