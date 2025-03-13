"use client";
// クライアントサイドで実施するもの

import React, { useState, useContext, createContext, ReactNode } from "react";

// 型定義はinterfaceでもOK
// MenuContextTypeという型定義のオブジェクトにisOpenとtoggleMenuを定義
type MenuContextType = {
	isOpen: boolean;
	toggleMenu: () => void;
};

// createContextで状態管理
// 初期値はundefinedで、型としては、ユニオン型でMenuContextか、undefinedを取るものとする。
// ※※※この時点では「空の容器」が作られただけで、実際の値はまだ存在しません。
const MenuContext = createContext<MenuContextType | undefined>(undefined);

// MenuProviderとしてメニューの情報を供給する役割のコンポーネントを作成
// 引数にはprops.childrenをとる。それはReactNode型。
// 供給するのは、「isOpen」「toggleMenu」で、それをこのProviderの中で定義してリターンしている。
export function MenuProvider({ children }: { children: ReactNode }) {
	// isOpenはboolean型。初期値はfalse
	const [isOpen, setIsOpen] = useState<boolean>(false);

	// toggleMenuは、isOpenのstateの現状を確認して、それをtrue、falseの切り替え実施
	const toggleMenu = () => setIsOpen((prev) => !prev);

	// <MenuContext.Provider> を使って、これらの値と関数をセットにしたオブジェクトを「容器」に設定します
	// useStateで、isOpen以外も作れるし、openMenuなどのメソッドも作成できるが、コンテキストを通じてvalueで提供できるのはMenuContextTypeに定義したもののみ
	return <MenuContext.Provider value={{ isOpen, toggleMenu }}>{children}</MenuContext.Provider>;
}

// 関係性をまとめると
// MenuContextType は「どんな種類のデータを共有するか」を定義します
// createContext は「そのデータを入れる容器」を作ります
// MenuProvider は「実際のデータと操作方法を作って容器に入れる」役割を担います
// コンテキストを使う側（子コンポーネント）は、この容器から値を取り出して使用することになります。これが useContext(MenuContext) を呼び出したときに行われることです。
