// @ts-check
/// <reference types="node" />
/// <reference types="mocha" />
/// <reference types="chai" />
/// <reference types="sinon" />
/// <reference types="sinon-chai" />

'use strict';

/** @typedef {import('..').BunyanLogMethod} BunyanLogMethod */

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const should = chai.should();

const bunyanAdaptor = require('..');

describe('Bunyan Adaptor', function () {
  /** @type {BunyanLogMethod} */
  let stubbedLog;

  beforeEach(function () {
    stubbedLog = sinon.stub(console, 'log');
  });

  afterEach(function () {
    sinon.restore();
  });

  describe('main', function () {
    it('should be created and log correctly', function () {
      const logger = bunyanAdaptor();

      should.exist(logger);
      should.exist(logger.error);

      logger.error('wow');

      stubbedLog.should.have.been.calledOnce.and.calledWith('wow');
    });

    it('should support child loggers', function () {
      const logger = bunyanAdaptor();
      const child = logger.child({ key: 'value' });

      should.exist(child);
      should.exist(child.error);

      logger.error('wow');
      child.error('wow2');

      logger.should.not.equal(child);

      stubbedLog.should.have.been.calledTwice
        .and.calledWith('wow')
        .and.calledWith({ key: 'value' }, 'wow2');
    });

    it('should support custom logger', function () {
      const stubbedCustomLog = sinon.stub();

      const logger = bunyanAdaptor({
        log: stubbedCustomLog,
      });

      should.exist(logger);
      should.exist(logger.error);

      logger.error('wow');

      stubbedLog.should.not.have.been.called;
      stubbedCustomLog.should.have.been.calledOnce.and.calledWith('wow');
    });

    it('should support detailed custom loggers', function () {
      const stubbedCustomLog = sinon.stub();
      const stubbedCustomVerboseLog = sinon.stub();
      const stubbedCustomWarnLog = sinon.stub();
      const stubbedCustomErrorLog = sinon.stub();

      const logger = bunyanAdaptor({
        log: stubbedCustomLog,
        verbose: stubbedCustomVerboseLog,
        warn: stubbedCustomWarnLog,
        error: stubbedCustomErrorLog,
      });

      logger.trace('wow1');
      logger.debug('wow2');
      logger.info('wow3');
      logger.warn('wow4');
      logger.error('wow5');
      logger.fatal('wow6');

      stubbedLog.should.not.have.been.called;
      stubbedCustomLog.should.have.been.calledOnce.and.calledWith('wow3');
      stubbedCustomVerboseLog.should.have.been.calledTwice
        .and.calledWith('wow1').and.calledWith('wow2');
      stubbedCustomWarnLog.should.have.been.calledOnce.and.calledWith('wow4');
      stubbedCustomErrorLog.should.have.been.calledTwice
        .and.calledWith('wow5').and.calledWith('wow6');
    });

    it('should have child loggers inherit custom loggers', function () {
      const stubbedCustomLog = sinon.stub();
      const logger = bunyanAdaptor({
        log: stubbedCustomLog,
      });
      const child = logger.child({ key: 'value' });

      should.exist(child);
      should.exist(child.error);

      logger.error('wow');
      child.error('wow2');

      logger.should.not.equal(child);

      stubbedLog.should.not.have.been.called;
      stubbedCustomLog.should.have.been.calledTwice
        .and.calledWith('wow')
        .and.calledWith({ key: 'value' }, 'wow2');
    });

    it('should support custom child method', function () {
      const stubbedCustomChild = sinon.stub().returns('yay');

      const logger = bunyanAdaptor({
        child: stubbedCustomChild,
      });
      const child = logger.child({ key: 'value' });

      should.exist(child);

      child.should.equal('yay');

      stubbedCustomChild.should.have.been.calledOnce.and.calledWith({ key: 'value' });
    });
  });
});
