define('forum/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/answer-home.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/answer-home.js should pass ESLint\n\n16:8 - \'self\' is assigned a value but never used. (no-unused-vars)\n18:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n19:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n20:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('components/answer-new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/answer-new.js should pass ESLint\n\n');
  });

  QUnit.test('components/intro-home.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/intro-home.js should pass ESLint\n\n');
  });

  QUnit.test('components/question-home.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/question-home.js should pass ESLint\n\n');
  });

  QUnit.test('components/question-new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/question-new.js should pass ESLint\n\n');
  });

  QUnit.test('components/question-qpage.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/question-qpage.js should pass ESLint\n\n8:4 - Unexpected console statement. (no-console)\n12:7 - \'Materialize\' is not defined. (no-undef)\n13:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n14:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n15:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n16:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n17:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n18:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n19:6 - \'Materialize\' is not defined. (no-undef)');
  });

  QUnit.test('models/answer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/answer.js should pass ESLint\n\n');
  });

  QUnit.test('models/question.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/question.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/questions.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/questions.js should pass ESLint\n\n');
  });

  QUnit.test('routes/questions/answers.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/questions/answers.js should pass ESLint\n\n6:3 - Unexpected console statement. (no-console)\n8:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n9:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n10:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n11:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n18:5 - \'Materialize\' is not defined. (no-undef)\n26:5 - \'Materialize\' is not defined. (no-undef)\n30:4 - Unexpected console statement. (no-console)\n32:24 - \'answer\' is defined but never used. (no-unused-vars)\n33:5 - \'Materialize\' is not defined. (no-undef)');
  });

  QUnit.test('routes/questions/answers/new.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/questions/answers/new.js should pass ESLint\n\n9:4 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/questions/new.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/questions/new.js should pass ESLint\n\n10:25 - \'place\' is defined but never used. (no-unused-vars)\n11:5 - \'Materialize\' is not defined. (no-undef)');
  });
});