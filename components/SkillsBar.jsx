import { Flex, Box, Icon, Tooltip } from '@chakra-ui/react';
import { SiCsswizardry } from 'react-icons/si';
import BarChart from './BarChart';
import containerClasses from '../styles/Container.module.css';
import iconsClasses from '../styles/Icons.module.css';

const SkillsBar = ({ index, title, icon, iconColor, barColor, value }) => {
  return (
    <Tooltip hasArrow label={`${title} - Click for details`}>
      <Flex className={containerClasses.skillsBar}>
        <Box className={containerClasses.innerBox}>
          <Icon
            className={iconsClasses.skillsBar}
            w={'30px'}
            h={'30px'}
            color={iconColor}
            as={icon}
            cursor={'pointer'}
          />
          {index === 3 && <Icon ml={3} color={'blue.500'} w={'30px'} h={'30px'} as={SiCsswizardry} />}
        </Box>
        <BarChart color={barColor} value={value} />
      </Flex>
    </Tooltip>
  );
};
export default SkillsBar;
