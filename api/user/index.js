const express = require('express');
const router = express.Router();
const ctrl = require('./user.ctrl');

/**
 * 사용자 목록 조회 API
 */
router.get('/', ctrl.index);

/**
 * 사용자 조회 API
 */
router.get('/:id', ctrl.show);

/**
 * 사용자 삭제 API
 */
router.delete('/:id', ctrl.destroy);

/**
 * 사용자 추가 API
 */
router.post('/', ctrl.create);

/**
 * 사용자 수정 API
 */
router.put('/:id', ctrl.update);

module.exports = router;