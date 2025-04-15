const { MENU_LINKS } = require("../constants/navigation");
const { STATUS_CODE } = require("../constants/statusCode");
const productsSlice = require("../store/products");

const Product = require ('../models/Product');

const getProductsView = (req, res) => {
    const products = Product.getAll();
    res.render("products.ejs", {
    headTitle: "Shop - Products",
    path: "/",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products",
    products: products
  });
}

const getAddProductView = (req, res) => {
    res.render("add-product.ejs", {
    headTitle: "Shop - Add product",
    path: "/add",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products/add",
  });
  };

const addNewProduct = (req, res) => {
    productsSlice.newestProduct = req.body;
    Product.add(productsSlice.newestProduct);
    res.redirect('/products/new');
};


const getNewProductView = (req, res) => {
    const product = Product.getLast();
    res.render("new-product.ejs", {
    headTitle: "Shop - New product",
    path: "/new",
    activeLinkPath: "/products/new",
    menuLinks: MENU_LINKS,
    newestProduct: product
      
  });
  };


const getProductView = (req, res) => {
  const { name } = req.params;
  const product = Product.findByName(name);

  if (!product) {
    return res.status(STATUS_CODE.NOT_FOUND).send('Produkt nie został znaleziony');
  }

  res.render('product.ejs', {
    headTitle: `Product: ${name}`,
    product
  });
};


const deleteProduct = (req, res) => {
    const { name } = req.params;
    const deleted = Product.deleteByName(name);
  
    if (!deleted) {
      return res.status(STATUS_CODE.NOT_FOUND).json({ success: false, message: 'Produkt nie istnieje' });
    }
  
    res.status(STATUS_CODE.OK).json({ success: true });
  };


  module.exports = {
    getProductsView,
    getAddProductView,
    addNewProduct,
    getNewProductView,
    getProductView,
    deleteProduct
  };



