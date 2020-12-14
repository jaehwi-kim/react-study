package web.mlpe_web.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class StringsLog {
    private int st_id;
    private int gt_id;
    private String startTs;
    private String endTs;
    private String portError;
    private String host_fix;
    private int port_fix;
    private String name_fix;
    private int serialNo_fix;
    private String fwVersion_fix;
    private int comparator_fix;
    private int devider_fix;
    private int rawPulsesCounter_fix;
    private String error;
    private int stringVoltage;
    private float stringCurrent;
    private int temperature;
    private int totalWh;

}
