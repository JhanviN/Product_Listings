'use client';
import { useState } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default function Home() {
  const [filters, setFilters] = useState({ category: [], brand: [], color: '' });
  const [sort, setSort] = useState('name-asc');
  const [page, setPage] = useState(1);
  const [cart, setCart] = useState({ items: 0, price: 0 });

  return (
    <Layout>
      <Header links={[{ text: 'HOME' }, { text: 'BAG' }, { text: 'SNEAKERS' }, { text: 'BELT' }, { text: 'CONTACT' }]} cartItems={cart.items} cartPrice={cart.price} />
      <Main>
        <Sidebar filters={filters} setFilters={setFilters} />
      </Main>
      <Footer />
    </Layout>
  );
}