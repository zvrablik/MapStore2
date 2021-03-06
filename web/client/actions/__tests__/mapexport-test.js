/*
 * Copyright 2018, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import expect from 'expect';

import { exportMap, EXPORT_MAP } from '../mapexport';

describe('mapExport actions', () => {

    it('exportMap', () => {
        const action = exportMap();
        expect(action).toExist();
        expect(action.type).toBe(EXPORT_MAP);
        expect(action.format).toBe("mapstore2");
    });
});
