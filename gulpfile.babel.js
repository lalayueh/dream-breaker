/* eslint-disable import/no-extraneous-dependencies */
import gulp from 'gulp';
import gulpHelp from 'gulp-help';

// tasks
import './gulp-tasks/build';
import './gulp-tasks/dev';

gulpHelp(gulp);
