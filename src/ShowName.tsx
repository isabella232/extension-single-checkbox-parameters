import { Checkbox } from '@tableau/tableau-ui';
import * as React from 'react';

/* tslint:disable:no-console */

export interface SelectorProps {
    show_name: boolean;
    enabled: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Shows if setting has not yet been configured
export const ShowName: React.SFC<SelectorProps> = (props) => {

    return (
        <div style={{ display: props.enabled ? '' : 'none' }}>
            <div style={{paddingLeft: '10px' }}>
                Parameter Name
                </div>
            <Checkbox
                checked={props.show_name}
                onChange={props.onChange}
                style={{ paddingRight: '5px', marginLeft: '20px' }}
            />
            Show
        </div>
    );
};

ShowName.displayName = 'Show Name';
