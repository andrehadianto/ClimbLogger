import {
  ModalBody,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

import { Modal } from "@/common/components/Modal";

export const AppInfoModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalBody py="4">
        <Tabs>
          <TabList>
            <Tab>ToS</Tab>
            <Tab>Donation</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>Tos</TabPanel>
            <TabPanel>Donation</TabPanel>
          </TabPanels>
        </Tabs>
      </ModalBody>
    </Modal>
  );
};
