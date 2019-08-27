import React, { useState } from 'react';

import Layout from '../templates/Layout';

import DropIcons from '../organisms/forms/dropIcons';
import Tables from '../organisms/tables/table';

export default () => {
    const [icons, setIcons] = useState(['white']);
    // const [norma, setNorma] = useState(3);

    return (
        <Layout title={'リゼロ白鯨撃破シミュレータ'}>
            <DropIcons 
                default={ icons }
                onChange={icons => setIcons(icons)}
                />

            <Tables icons={ icons } />
        </Layout>
    )
}