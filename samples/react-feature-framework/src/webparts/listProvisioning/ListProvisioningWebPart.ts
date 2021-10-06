import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'listProvisioningStrings';
import ListProvisioning from './components/ListProvisioning';
import { IListProvisioningProps } from './components/IListProvisioningProps';
import { IListProvisioningWebPartProps } from './IListProvisioningWebPartProps';

export default class ListProvisioningWebPart extends BaseClientSideWebPart<IListProvisioningWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IListProvisioningProps > = React.createElement(
      ListProvisioning,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
