# Changelog

CHANGELOG.md standards are inspired by [keepachangelog.com](https://keepachangelog.com/en/1.0.0/).

## [2.4.15] - 2022-04-28

### Changed

- Version patch update due to children dependencies update (`@semcore/select` [2.7.10 ~> 2.7.11]).

## [2.4.14] - 2022-04-25

### Changed

- Version patch update due to children dependencies update (`@semcore/select` [2.7.9 ~> 2.7.10]).

## [2.4.13] - 2022-04-21

### Changed

- Version patch update due to children dependencies update (`@semcore/select` [2.7.8 ~> 2.7.9]).

## [2.4.12] - 2022-03-21

### Changed

- Version patch update due to children dependencies update (`@semcore/select` [2.7.7 ~> 2.7.8]).

## [2.4.11] - 2022-03-14

### Changed

- Version patch update due to children dependencies update (`@semcore/utils` [3.31.2 ~> 3.31.2], `@semcore/flex-box` [4.5.0 ~> 4.5.1], `@semcore/button` [3.3.6 ~> 3.3.7], `@semcore/input` [2.2.4 ~> 2.2.5], `@semcore/select` [2.7.6 ~> 2.7.7]).

## [2.4.10] - 2022-03-10

### Changed

- Version patch update due to children dependencies update (`@semcore/select` [2.7.5 ~> 2.7.6]).

## [2.4.9] - 2022-03-05

### Changed

- Version patch update due to children dependencies update (`@semcore/select` [2.7.4 ~> 2.7.5]).

## [2.4.6] - 2022-02-24

### Added

- Added repository field to package.json file.

## [2.4.4] - 2021-8-26

### Changed

- Add 'sideEffect=false' for more optimal build via webpack

## [2.4.3] - 2021-08-23

### Changed

- Changed height dropdown from `240px` to `180px`.

## [2.4.2] - 2021-06-04

### Added

- [A11] Added `aria-label` for `Timepicker.Hours, Timepicker.Minutes`.

## [2.4.1] - 2021-05-17

### Changed

- Rewrite code from TS to JS 🧑‍💻

## [2.3.0] - 2021-04-26

### Changed

- Version of dependence `@semcore/core` has been changed to `1.11`.
- Improved performance. Removed one component wrapper.
- The style processing system has been changed.
- Removed the ability to apply media styles via a plugin `babel-plugin-react-semcore`.

## [2.2.1] - 2021-04-13

### Added

- Added `type="button"` for controls `TimePicker.Format`.

## [2.2.0] - 2021-03-31

### Changed

- Changed view `TimePicker.Format`, now view don't have icons `TimeNight, TimeDay`.

## [2.1.0] - 2020-12-17

### Added

- Added supported react@17.

## [2.0.3] - 2020-10-29

### Fixed

- Added the placeholder for ID style tag to improve collision protection.

## [2.0.2] - 2020-09-08

### Fixed

- Fixed possible styles collisions between components with different versions, but same styles

## [2.0.1] - 2020-06-10

### Fixed

- Исправлены TS типы

## [2.0.0] - 2020-06-03

### BREAK

- Изменения описаны в [migration guide](/internal/migration-guide)

## [1.4.1-0] - 2020-05-20

### Changed

- Убрано поведения для мобильных устройств из-за невозможности определить наличие мобильных контроллов.

## [1.4.0] - 2020-04-27

### Added

- Добавлено свойство `disablePortal` для отключения рендера в портал

## [1.3.1] - 2019-12-17

### Fixed

- Исправлен транспайл цветовых переменных для стилей без префиксов (build.css)

## [1.3.0] - 2019-12-12

### Added

- Появилась возможность добавления различных стилистических тем через css переменные
- Появилась возможность оптицонально подключать адаптивноссть
- Появилась возможность изолировать стили даже в пределах одной страницы

### Changed

- Изменен алгоритм вставки стилей в head

### Removed

- Убраны относительные единицы измерения(rem), которые использовались для адаптивности

## [1.2.1] - 2019-11-28

### Added

- проброс `forwardedRef` для `Hours, Minutes`

### Fixed

- тип `onChange` для `Timepicker`

## [1.2.0] - 2019-11-14

### Added

- Добавлена адаптивность на маленьких экранах(<768px)

## [1.1.4] - 2019-10-11

### Changed

- Обновлены версии пакетов

- Убран `root-ref` пакет

## [1.1.3] - 2019-09-30

### Changed

- Нужные зависимости перенесены в `utils`, размер должен стать меньше

## [1.1.2] - 2019-07-31

### Fixed

- Исправлена сборка для рендера css на сервере

## [1.1.1] - 2019-07-04

### Added

- Добавлен uncontroll режим

## [1.0.4] - 2019-06-24

### Fixed

- Исправлены ошибки в типизации

## [1.0.3] - 2019-05-24

### Fixed

- Исправленно переключение форматов

## [1.0.2] - 2019-05-21

### Fixed

- Исправленно отобрражение задизейбленного `PickerFormat`
- Исправлена ошибка при отсутствии `value`

## [1.0.1] - 2019-05-14

### Added

- Initial release
