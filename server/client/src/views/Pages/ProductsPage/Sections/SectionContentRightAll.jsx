import React, { Component } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
import { Link } from 'react-router-dom';
import Favorite from "@material-ui/icons/Favorite";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
// core components
import GridContainer from "../../../../components/Pages/Grid/GridContainer";
import GridItem from "../../../../components/Pages/Grid/GridItem";
import Card from "../../../../components/Pages/Card/Card";
import CardHeader from "../../../../components/Pages/Card/CardHeader";
import CardFooter from "../../../../components/Pages/Card/CardFooter";
import CardBody from "../../../../components/Pages/Card/CardBody";
import CustomButton from "../../../../components/Pages/CustomButtons/Button";
// styles jss
import styles from "../../../../assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle";

class SectionContentRightAll extends Component {
    constructor() {
        super();
        this.state = {
          currentPage: 1,
          todosPerPage: 4
        };
    }
    handleClick = (event) => {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }
    format_curency = (price) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      }
    render() {
        const { currentPage, todosPerPage } = this.state;
        const { classes, products } = this.props;
        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = products.slice(indexOfFirstTodo, indexOfLastTodo);
        const renderTodos = currentTodos.map((item, index) => {
            return (
                <GridItem md={4} sm={4} key={index}>
                    <Card plain product>
                      <CardHeader noShadow image>
                        <Link to={`/product-detail/${item.productID}`}>
                          <img src={item.productImageOfficial} alt={item.productName} />
                        </Link>
                      </CardHeader>
                      <CardBody plain>
                      <Link to={`/product-detail/${item.productID}`}>
                          <h5 className={`${classes.cardTitle} ${classes.customFont}`}>{item.productName}</h5>
                        </Link>
                      </CardBody>
                      <CardFooter plain className={classes.justifyContentBetween}>
                        <div className={classes.priceContainer}>
                        {item.productSale ?  <span className={classNames(classes.price, classes.priceOld)}>
                          {" "}
                          {this.format_curency(item.productPrice)} VND 
                      
                        </span> :  <span className={classNames(classes.price)}>
                          {" "}
                          {this.format_curency(item.productPrice)} VND 
                      
                        </span>}

                        {item.productSale ? <span className={classNames(classes.price, classes.priceNew)}>
                          {" "}
                          {this.format_curency(item.productPrice - (item.productPrice * item.productSale / 100))} VND 
                        
                        </span> : null}
                        </div>
                        <Tooltip
                          id="tooltip-top"
                          title="Saved to Wishlist"
                          placement="left"
                          classes={{ tooltip: classes.tooltip }}
                        >
                          <CustomButton
                            justIcon
                            simple
                            color="rose"
                            className={classes.pullRight}
                          >
                            <Favorite />
                          </CustomButton>
                        </Tooltip>
                      </CardFooter>
                    </Card>
                  </GridItem>
            );
          });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(products.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
              <CustomButton  
                key={number}
                id={number}
                onClick={this.handleClick}
                color="primary"
                size="sm"
                >
                {number}
                </CustomButton>
            );
          });

        return (
            <GridItem md={9} sm={9}>
                <Card plain>
                    <CardBody>
                        <GridContainer>
                            {renderTodos}
                        </GridContainer>
                    </CardBody>
                    <CardFooter>
                        <GridContainer>
                            <GridItem
                                md={12}
                                className={classNames(classes.mlAuto, classes.mrAuto)}
                            >
                                <ul className={classes.pagination}>
                                    <li>
                                        {renderPageNumbers}
                                    </li>
                                </ul>
                            </GridItem>
                        </GridContainer>
                    </CardFooter>
                </Card>
            </GridItem>
        );
    }
}
  

export default withStyles(styles)(SectionContentRightAll);