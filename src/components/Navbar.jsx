import React from "react"
import Image from "next/image"
import {
    header,
    container,
    item,
    icons,
    shoppingBag,
    rightNav,
    favItems,
    leftNav
} from "../styles/Navbar.module.scss"
import { BsBag, BsHeart, BsSearch } from "react-icons/bs"
import { BiUser } from "react-icons/bi"
import Link from "next/link"
import { useSelector } from "react-redux"

const Navbar = () => {
    const quantity = useSelector((state) => state.shoppingBag.quantity)
    console.log(quantity)

    return (
        <>
            <header className={header}>
                <div className={container}>
                    {/* left */}
                    <div className={item}>
                        <Link href="/">
                            <Image src="/logo.png" alt="logo image" width={60} height={60} />
                        </Link>
                    </div>

                    {/* middle */}
                    <div className={item}>
                        <ul className={leftNav}>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/shop">Shop</Link>
                            </li>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* right */}
                    <div className={item}>
                        <ul className={rightNav}>
                            <li className={shoppingBag}>
                                <Link href="/shopping-card">
                                    <BsBag color="black" size={20} />
                                </Link>
                                <span>{quantity}</span>
                            </li>
                            <li className="">
                                <a href="/admin/">
                                    <BiUser color="black" size={25} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
