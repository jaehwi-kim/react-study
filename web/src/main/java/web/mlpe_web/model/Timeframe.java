package web.mlpe_web.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Timeframe {
    private String endts;
    private int st_id;
    private int md_sn;
    private int modulewatt;
    private int modulevoltage;
    private int moduletemperature;
    private int stringwatt;
    private int stringvoltage;
    private int stringtemperature;
    private int totalwatt;
}