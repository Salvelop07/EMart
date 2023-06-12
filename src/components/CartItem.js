import Image from "next/image";
import prisma from "../../lib/db";
import QuantityController from "../components/QuantityController";

export default async function CartItem({ productId, quantity }) {
  const product = await prisma.products.findUnique({
    where: {
      id_: productId,
    },
  });
  // console.log(product);
  return (
    <div className="row gy-3 mb-4">
      <div className="col-lg-5">
        <div className="me-lg-5">
          <div className="d-flex">
            <Image
              alt={product.title}
              src={product.thumbnail}
              className="border rounded me-3"
              style={{ width: 96, height: 96 }}
              width={96}
              height={96}
            />
            <div className="">
              <a href="#" className="nav-link">
                {product.title}
              </a>
              <p className="text-muted">{product.brand}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap gap-5 gap-md-4">
        {/* QuantityController */}

        <QuantityController quantity={quantity} />

        {/* QuantityController */}
        <div className="">
          <text className="h6">
            $
            {(
              product.price -
              product.price * (product.discountPercentage / 100)
            ).toFixed(2)}
          </text>{" "}
          <br />
          <small className="text-danger text-nowrap">
            <s>${product.price}</s>{" "}
          </small>
        </div>
      </div>
      <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
        <div className="float-md-end">
          <a href="#!" className="btn btn-light border px-2 icon-hover-primary">
            <i className="fas fa-heart fa-lg px-1 text-secondary" />
          </a>
          <a
            href="#"
            className="btn btn-light border text-danger icon-hover-danger"
          >
            {" "}
            Remove
          </a>
        </div>
      </div>
    </div>
  );
}
