import './styles.css';
import { SettingIcon } from './SettingIcon';
import { ToggleArrow } from './ToggleArrowIcon';
import { GitHubIcon } from './GitHubIcon';
export const HeaderMenu = () => {
  return (
    <div className="header-menu">
      <SettingIcon />
      <GitHubIcon />
      <div>
        <h1 className="header-user1">Michał</h1>
        <h1 className="header-user2">kursant</h1>
      </div>
      <ToggleArrow />
    </div>
  );
};
