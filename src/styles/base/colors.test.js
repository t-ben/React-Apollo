import React from 'react';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import expect from 'expect';
import chai from 'chai';
const sinonChai = require('sinon-chai');
const chaiEnzyme = require('chai-enzyme');

chai.should();
chai.use(sinonChai);
chai.use(chaiEnzyme());

import colors from  './colors';

describe('loading colors text - ', () => {
    it('should load the colors text using raw-loader', () => {
        // const colorsTxt = require("raw!./colors.styl");        
        // console.log('colorsTxt=', colorsTxt);
        // colorsTxt.should.be.a.string;
        // colorsTxt.length.should.not.be(0);
    });

    it('should read the colors text from colors module', () => {
        colors.should.have.property('blue10');
        colors.should.have.property('blue10', '#bfe6ff');        
        colors.should.have.property('grey50', '#777677');
    });
});