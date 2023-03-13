import { useEffect, useRef, useState } from "react";

export default function Produto() {
	const [products, setProducts] = useState([]);

	async function getProducts() {
		const postData = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		};
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_URL}/api/produtos`,
			postData
		);
		const response = await res.json();
		setProducts(response.products);
		console.log(response);
	}

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<>
			{products.map((item, index) => {
				return (
					<div key={item.produto_id}>
						<span>produto_id</span>: {item.produto_id} <br />{" "}
						<span>produto_nome</span>: {item.produto_nome}{" "}
					</div>
				);
			})}
			{!products.length ? <>No products found</> : null}
		</>
	);
}