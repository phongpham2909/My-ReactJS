import React from "react";
import { Link } from 'react-router-dom';
// nodejs library that concatenates classes
import classNames from "classnames";
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import LocalShipping from "@material-ui/icons/LocalShipping";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Parallax from "../../../components/Pages/Parallax/Parallax";
import GridContainer from "../../../components/Pages/Grid/GridContainer";
import GridItem from "../../../components/Pages/Grid/GridItem";
import Button from "../../../components/Pages/CustomButtons/Button";
import Accordion from "../../../components/Pages/Accordion/Accordion";
import InfoArea from "../../../components/Pages/InfoArea/InfoArea";
import Card from "../../../components/Pages/Card/Card";
import CardHeader from "../../../components/Pages/Card/CardHeader";
import CardBody from "../../../components/Pages/Card/CardBody";
import CardFooter from "../../../components/Pages/Card/CardFooter";
import productStyle from "../../../assets/jss/material-kit-pro-react/views/productStyle";
// images
import cardProduct1 from "../../../assets/img/product/gucci.jpg";
import cardProduct3 from "../../../assets/img/product/dolce.jpg";
import cardProduct4 from "../../../assets/img/product/dolce.jpg";
import cardProduct2 from "../../../assets/img/product/dolce.jpg";
// connect redux
import { connect } from "react-redux";
import { actGetProductRequest, actAddToCart, actChangeMessageCart } from "../../../redux/actions/index";
import * as Message from '../../../redux/constants/message';
import { toast, ToastContainer } from 'react-toastify';
import { css } from 'glamor';
import CloseButtonToast from "../../../components/Pages/CloseButtonToast/CloseButtonToast";

const SuccessAddToCart = () => (
    <div>
        <span role="img" aria-label="show alert">🚀</span>&nbsp;<b>SUCCESS: </b> {Message.MSG_ADD_TO_CART_SUCCESS}
    </div>
)

class ProductDetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorSelect: "0",
            sizeSelect: "0",
            cart: []
        };
    }
    handleSelect = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    handleAddToCart = (product) => {
        this.props.actAddToCart(product);
        toast(<SuccessAddToCart />, {
            position: toast.POSITION.BOTTOM_RIGHT,
            pauseOnHover: false,
            className: css({
                background: '#43a047 !important',
                color: '#fff !important',
                boxShadow: '2px 2px 20px 2px rgba(0,0,0,0.3) !important',
                borderRadius: '6px !important',
            }),
            progressClassName: css({
                background: '#fff !important'
            })
        })
    }
    componentDidMount() {
        if (localStorage.getItem('CART')) {
            this.setState({
                cart: this.props.cart
            })
        }
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.actFetchProduct(id);
        }
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    }
    format_curency = (price) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
    render() {
        const { cart } = this.state;
        const { classes, product } = this.props;
        const images = [
            {
                original: product.productImageOfficial,
                thumbnail: product.productImageOfficial
            },
            {
                original: product.productImage1,
                thumbnail: product.productImage1
            },
            {
                original: product.productImage2,
                thumbnail: product.productImage2
            },
            {
                original: product.productImage3,
                thumbnail: product.productImage3
            }
        ];
        return (
            <div className={classes.productPage}>
                <ToastContainer autoClose={3000} closeButton={<CloseButtonToast />} newestOnTop />
                <Parallax
                    image={require("../../../assets/img/background/banner.jpg")}
                    filter="rose"
                    className={classes.pageHeader}
                >
                    <div className={classes.container}>
                        <GridContainer className={classes.titleRow}>
                            <GridItem md={4} className={classes.mlAuto}>
                                <Link to="/cart">
                                    <Button color="white" className={classes.floatRight}>
                                        <ShoppingCart /> {cart.length} items
                                </Button>
                                </Link>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
                <div className={classNames(classes.section, classes.sectionGray)}>
                    <div className={classes.container}>
                        <div className={classNames(classes.main, classes.mainRaised)}>
                            <GridContainer>
                                <GridItem md={6} sm={6}>
                                    <ImageGallery
                                        showFullscreenButton={false}
                                        showPlayButton={false}
                                        showNav={false}
                                        startIndex={0}
                                        items={images}
                                    />
                                </GridItem>
                                <GridItem md={6} sm={6}>
                                    <h3 className={classes.title}>{product.productName}</h3>
                                    <h3 className={classes.mainPrice}>{this.format_curency(`${product.productPrice}`)} VND</h3>
                                    <Accordion
                                        active={0}
                                        activeColor="rose"
                                        collapses={[
                                            {
                                                title: "Description",
                                                content: (
                                                    <p>
                                                        Eres' daring 'Grigri Fortune' swimsuit has the fit
                                                        and coverage of a bikini in a one-piece silhouette.
                                                        This fuchsia style is crafted from the label's
                                                        sculpting peau douce fabric and has flattering
                                                        cutouts through the torso and back. Wear yours with
                                                        mirrored sunglasses on vacation.
                                                    </p>
                                                )
                                            },
                                            {
                                                title: "Designer Information",
                                                content: (
                                                    <p>
                                                        An infusion of West Coast cool and New York
                                                        attitude, Rebecca Minkoff is synonymous with It girl
                                                        style. Minkoff burst on the fashion scene with her
                                                        best-selling 'Morning After Bag' and later expanded
                                                        her offering with the Rebecca Minkoff Collection - a
                                                        range of luxe city staples with a \"downtown
                                                        romantic\" theme.
                                                    </p>
                                                )
                                            },
                                            {
                                                title: "Details and Care",
                                                content: (
                                                    <ul>
                                                        <li>
                                                            Storm and midnight-blue stretch cotton-blend
                                                        </li>
                                                        <li>
                                                            Notch lapels, functioning buttoned cuffs, two
                                                            front flap pockets, single vent, internal pocket
                                                        </li>
                                                        <li>Two button fastening</li>
                                                        <li>84% cotton, 14% nylon, 2% elastane</li>
                                                        <li>Dry clean</li>
                                                    </ul>
                                                )
                                            }
                                        ]}
                                    />
                                    <GridContainer className={classes.pickSize}>
                                        <GridItem md={6} sm={6}>
                                            <label>Select color</label>
                                            <FormControl
                                                fullWidth
                                                className={classes.selectFormControl}
                                            >
                                                <Select
                                                    MenuProps={{
                                                        className: classes.selectMenu
                                                    }}
                                                    classes={{
                                                        select: classes.select
                                                    }}
                                                    value={this.state.colorSelect}
                                                    onChange={this.handleSelect}
                                                    inputProps={{
                                                        name: "colorSelect",
                                                        id: "color-select"
                                                    }}
                                                >
                                                    <MenuItem
                                                        classes={{
                                                            root: classes.selectMenuItem,
                                                            selected: classes.selectMenuItemSelected
                                                        }}
                                                        value="0"
                                                    >
                                                        Rose
                                                    </MenuItem>
                                                    <MenuItem
                                                        classes={{
                                                            root: classes.selectMenuItem,
                                                            selected: classes.selectMenuItemSelected
                                                        }}
                                                        value="1"
                                                    >
                                                        Gray
                                                    </MenuItem>
                                                    <MenuItem
                                                        classes={{
                                                            root: classes.selectMenuItem,
                                                            selected: classes.selectMenuItemSelected
                                                        }}
                                                        value="2"
                                                    >
                                                        White
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </GridItem>
                                        <GridItem md={6} sm={6}>
                                            <label>Select size</label>
                                            <FormControl
                                                fullWidth
                                                className={classes.selectFormControl}
                                            >
                                                <Select
                                                    MenuProps={{
                                                        className: classes.selectMenu
                                                    }}
                                                    classes={{
                                                        select: classes.select
                                                    }}
                                                    value={this.state.sizeSelect}
                                                    onChange={this.handleSelect}
                                                    inputProps={{
                                                        name: "sizeSelect",
                                                        id: "size-select"
                                                    }}
                                                >
                                                    <MenuItem
                                                        classes={{
                                                            root: classes.selectMenuItem,
                                                            selected: classes.selectMenuItemSelected
                                                        }}
                                                        value="0"
                                                    >
                                                        Small
                                                    </MenuItem>
                                                    <MenuItem
                                                        classes={{
                                                            root: classes.selectMenuItem,
                                                            selected: classes.selectMenuItemSelected
                                                        }}
                                                        value="1"
                                                    >
                                                        Medium
                                                    </MenuItem>
                                                    <MenuItem
                                                        classes={{
                                                            root: classes.selectMenuItem,
                                                            selected: classes.selectMenuItemSelected
                                                        }}
                                                        value="2"
                                                    >
                                                        Large
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer className={classes.pullRight}>
                                        <Button round color="rose" onClick={() => this.handleAddToCart(product)}>
                                            Add to Cart &nbsp; <ShoppingCart />
                                        </Button>
                                    </GridContainer>
                                </GridItem>
                            </GridContainer>
                        </div>
                        <div className={classNames(classes.features, classes.textCenter)}>
                            <GridContainer>
                                <GridItem md={4} sm={4}>
                                    <InfoArea
                                        title="2 Days Delivery"
                                        description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                                        icon={LocalShipping}
                                        iconColor="info"
                                        vertical
                                    />
                                </GridItem>
                                <GridItem md={4} sm={4}>
                                    <InfoArea
                                        title="Refundable Policy"
                                        description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                                        icon={VerifiedUser}
                                        iconColor="success"
                                        vertical
                                    />
                                </GridItem>
                                <GridItem md={4} sm={4}>
                                    <InfoArea
                                        title="Popular Item"
                                        description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                                        icon={Favorite}
                                        iconColor="rose"
                                        vertical
                                    />
                                </GridItem>
                            </GridContainer>
                        </div>
                        <div className={classes.relatedProducts}>
                            <h3 className={classNames(classes.title, classes.textCenter)}>
                                You may also be interested in:
                            </h3>
                            <GridContainer>
                                <GridItem sm={6} md={3}>
                                    <Card product>
                                        <CardHeader image>
                                            <a href="#pablo">
                                                <img src={cardProduct1} alt="cardProduct" />
                                            </a>
                                        </CardHeader>
                                        <CardBody>
                                            <h6
                                                className={classNames(
                                                    classes.cardCategory,
                                                    classes.textRose
                                                )}
                                            >
                                                Trending
                                            </h6>
                                            <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                                            <div className={classes.cardDescription}>
                                                Dolce & Gabbana's 'Greta' tote has been crafted in Italy
                                                from hard-wearing red textured-leather.
                                        </div>
                                        </CardBody>
                                        <CardFooter className={classes.justifyContentBetween}>
                                            <div className={classes.price}>
                                                <h4>$1,459</h4>
                                            </div>
                                            <div className={classes.stats}>
                                                <Tooltip
                                                    id="tooltip-top"
                                                    title="Save to Wishlist"
                                                    placement="top"
                                                    classes={{ tooltip: classes.tooltip }}
                                                >
                                                    <Button justIcon color="rose" simple>
                                                        <Favorite />
                                                    </Button>
                                                </Tooltip>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </GridItem>
                                <GridItem sm={6} md={3}>
                                    <Card product>
                                        <CardHeader image>
                                            <a href="#pablo">
                                                <img src={cardProduct3} alt="cardProduct3" />
                                            </a>
                                        </CardHeader>
                                        <CardBody>
                                            <h6 className={classes.cardCategory}>Popular</h6>
                                            <h4 className={classes.cardTitle}>Balmain</h4>
                                            <div className={classes.cardDescription}>
                                                Balmain's mid-rise skinny jeans are cut with stretch to
                                                ensure they retain their second-skin fit but move
                                                comfortably.
                                        </div>
                                        </CardBody>
                                        <CardFooter className={classes.justifyContentBetween}>
                                            <div className={classes.price}>
                                                <h4>$459</h4>
                                            </div>
                                            <div className={classes.stats}>
                                                <Tooltip
                                                    id="tooltip-top"
                                                    title="Save to Wishlist"
                                                    placement="top"
                                                    classes={{ tooltip: classes.tooltip }}
                                                >
                                                    <Button justIcon link>
                                                        <Favorite />
                                                    </Button>
                                                </Tooltip>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </GridItem>
                                <GridItem sm={6} md={3}>
                                    <Card product>
                                        <CardHeader image>
                                            <a href="#pablo">
                                                <img src={cardProduct4} alt="cardProduct4" />
                                            </a>
                                        </CardHeader>
                                        <CardBody>
                                            <h6 className={classes.cardCategory}>Popular</h6>
                                            <h4 className={classes.cardTitle}>Balenciaga</h4>
                                            <div className={classes.cardDescription}>
                                                Balenciaga's black textured-leather wallet is finished
                                                with the label's iconic 'Giant' studs. This is where you
                                                can...
                                        </div>
                                        </CardBody>
                                        <CardFooter className={classes.justifyContentBetween}>
                                            <div className={classes.price}>
                                                <h4>$590</h4>
                                            </div>
                                            <div className={classes.stats}>
                                                <Tooltip
                                                    id="tooltip-top"
                                                    title="Save to Wishlist"
                                                    placement="top"
                                                    classes={{ tooltip: classes.tooltip }}
                                                >
                                                    <Button justIcon color="rose" simple>
                                                        <Favorite />
                                                    </Button>
                                                </Tooltip>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </GridItem>
                                <GridItem sm={6} md={3}>
                                    <Card product>
                                        <CardHeader image>
                                            <a href="#pablo">
                                                <img src={cardProduct2} alt="cardProduct2" />
                                            </a>
                                        </CardHeader>
                                        <CardBody>
                                            <h6
                                                className={classNames(
                                                    classes.cardCategory,
                                                    classes.textRose
                                                )}
                                            >
                                                Trending
                                            </h6>
                                            <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                                            <div className={classes.cardDescription}>
                                                Dolce & Gabbana's 'Greta' tote has been crafted in Italy
                                                from hard-wearing red textured-leather.
                                        </div>
                                        </CardBody>
                                        <CardFooter className={classes.justifyContentBetween}>
                                            <div className={classes.price}>
                                                <h4>$1,459</h4>
                                            </div>
                                            <div className={classes.stats}>
                                                <Tooltip
                                                    id="tooltip-top"
                                                    title="Save to Wishlist"
                                                    placement="top"
                                                    classes={{ tooltip: classes.tooltip }}
                                                >
                                                    <Button justIcon link>
                                                        <Favorite />
                                                    </Button>
                                                </Tooltip>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </GridItem>
                            </GridContainer>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        product: state.productEditing,
        cart: state.cart
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        actFetchProduct: (id) => {
            dispatch(actGetProductRequest(id));
        },
        actAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        actChangeMessageCart: (msg) => {
            dispatch(actChangeMessageCart(msg));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(productStyle)(ProductDetailPage));
