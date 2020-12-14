package web.mlpe_web.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

public class StringsLogWithUnit {
    private int st_id;
    private String endts;
    private int totalwh;
    private int totalwh_delta;
    private float stringvoltage_avg;
    private float temperature_avg;
    private float stringwatt_avg;
}
